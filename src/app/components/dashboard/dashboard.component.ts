import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/modules/orders/order.model';
import { OrdersList } from 'src/app/modules/orders/store/selectors/orders.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  ordersList$ = this.store.select(OrdersList);
  ordersListItems : any = [];

  constructor(private store: Store) { 
    const columnNames : String[] = ['Item', 'Price']
  }

  ngOnInit(): void {
    this.ordersList$.subscribe(data => {
      console.log("Here", data);
      this.ordersListItems = data
      
    })
  }

  getOrdersData(): any{
    

  }

}
