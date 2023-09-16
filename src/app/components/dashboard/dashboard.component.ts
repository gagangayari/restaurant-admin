import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/modules/orders/order.model';
import { OrdersList } from 'src/app/modules/orders/store/selectors/orders.selector';
import {MatTableModule} from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  
  ordersList$ = this.store.select(OrdersList);
  ordersListItems : any = [];
  columnNames : String[] = ['item', 'Price']
  activeMenu : String ;
  orderListSubscription : Subscription


  constructor(private store: Store) { 
    this.activeMenu = "Orders"

    this.orderListSubscription = this.ordersList$.subscribe(data => {
      console.log("Here", data);
      this.ordersListItems = data
      
    })
  }

  ngOnInit(): void {
    
  }


  ngOnDestroy() {
    this.orderListSubscription?.unsubscribe();
  }

  getOrdersData(): any{
    

  }

  

}
