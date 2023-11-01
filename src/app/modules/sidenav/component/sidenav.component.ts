import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as OrderActions from '../../orders/store/actions/order.actions'
import * as ProductActions from '../../products/store/products.action'
import { Order } from '../../orders/order.model';
import { Observable, Subscription, tap } from 'rxjs';
import { OrdersList } from '../../orders/store/selectors/orders.selector';
import { Router } from '@angular/router';
import { setLoadingSpinner } from 'src/app/shared/shared.action';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  ordersList$: any = [];
  subscription!: Subscription;
  isAuthenticated: boolean = false;

  constructor(private store: Store, private router: Router) { 
    // this.ordersList$ = this.store.select(OrdersList);
    
  }

  ngOnInit(): void {
  
  }


  getOrders(): void {
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(OrderActions.loadOrders());
    

  }

  showProducts(){
    this.store.dispatch(ProductActions.loadProducts());
  }



}