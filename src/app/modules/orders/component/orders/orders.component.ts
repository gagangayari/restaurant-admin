import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { OrdersList } from '../../store/selectors/orders.selector';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  ordersList$ = this.store.select(OrdersList);
  ordersListItems : any = [];

  columnNames : String[] = ['item', 'Price']


  orderListSubscription : Subscription

  constructor(private store: Store){

    this.orderListSubscription = this.ordersList$.subscribe(data => {
      console.log("Here", data);
      this.ordersListItems = data
      
    })
  }


  ngOnDestroy() {
    this.orderListSubscription?.unsubscribe();
  }

  

}
