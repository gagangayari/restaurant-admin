import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { OrdersList } from '../../store/selectors/orders.selector';
import * as OrderActions from '../../store/actions/order.actions';
import { getLoadingState } from 'src/app/shared/shared.selector';
import { AppState } from 'src/app/store/app.reducer';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  ordersList$ = this.store.select(OrdersList);
  ordersListItems : any = [];

  columnNames : String[] = ['item', 'Price','delete']


  orderListSubscription : Subscription

  showLoading : Observable<boolean> ;

  constructor(private store: Store<AppState>){
    this.showLoading = this.store.select(getLoadingState);
    console.log("Show loading", this.showLoading);
    


    this.orderListSubscription = this.ordersList$.subscribe(data => {
      console.log("Here", data);
      this.ordersListItems = data
      
    })
  }

  ngOnInit() {
    // this.store.dispatch(onBrowserReload());
  }


  ngOnDestroy() {
    this.orderListSubscription?.unsubscribe();
  }

  deleteItem(row:any){
    const index = this.ordersListItems.indexOf(row);
    console.log(index);
    



    if (index >=0){
      this.ordersListItems = this.ordersListItems.slice();//Copy a new array. Cannot modify the original
      const orderId: String = this.ordersListItems.splice(index, 1)[0].orderId;
      this.ordersListItems = [...this.ordersListItems];

      //Call service to remove from the db
      this.store.dispatch(OrderActions.deleteOrder({orderId}))
      
    }
    
  }

  

}
