import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../../store/actions/order.actions'
import { Order } from '../../order.model';
import { Observable, Subscription, tap } from 'rxjs';
import { OrdersList } from '../../store/selectors/orders.selector';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  ordersList$: any = [];
  subscription!: Subscription;

  constructor(private store: Store) { 
    this.ordersList$ = this.store.select(OrdersList);
    
  }

  ngOnInit(): void {
  
  }


  getOrders(): void {
    this.store.dispatch(Actions.loadOrders());
    

  }



}