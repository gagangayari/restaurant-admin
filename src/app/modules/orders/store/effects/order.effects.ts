import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import * as orderActions from '../actions/order.actions';
import { catchError, map, switchMap, of, tap, exhaustMap } from 'rxjs';
import { OrdersServices } from '../../services.service';
import { Order, OrderFirebase } from '../../order.model';


@Injectable(

)
export class OrderEffects {

  tempCount = 0;


  constructor(private actions$: Actions, private orderSvc: OrdersServices) {
    console.log("INitiating order effects");
    
  }

  loadOrders$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(orderActions.loadOrders),
      exhaustMap(()=>{
        console.log("Orders load");
        return this.orderSvc.getOrders().pipe(
          map((response) => {
            // Assuming "orders" is an array within the response
            const orders = response.documents; // Modify this according to your API response structure
  
            const ordersList = orders.map((order: any) => {
              
              // Process and transform each order as needed
              const processedOrder = {
                // Map fields from "order" to your desired structure
                // For example:
                price: order.fields.price['integerValue'],
                item: order.fields.item['stringValue'],
                // Add more properties here
              };
              return processedOrder;
            });

            console.log("Orders processed", ordersList);
            
  
            return ordersList; // Return the processed "ordersList"
          }),
          map(orders => orderActions.loadOrdersSuccess({ orders})))
      }));

  });

  // orderSuccessEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(orderActions.loadOrdersSuccess), // Listen for the "OrderSuccess" action
  //     tap((action) => {
  //       this.tempCount++;
  //       console.log('Data from OrderSuccess Action:',this.tempCount, action.orders);
  //     }),

  //   )
  // );
}
