import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import * as orderActions from '../actions/order.actions';
import { catchError, map, switchMap, of, tap, exhaustMap, withLatestFrom } from 'rxjs';
import { OrdersServices } from '../../services.service';
import { Order, OrderFirebase } from '../../order.model';
import { Store } from '@ngrx/store';
import { OrdersList } from '../selectors/orders.selector';
import { AppState } from 'src/app/store/app.reducer';
import { setLoadingSpinner } from 'src/app/shared/store/shared.action';


@Injectable(

)
export class OrderEffects {

  tempCount = 0;


  constructor(private actions$: Actions, 
    private orderSvc: OrdersServices,
    private store: Store<AppState>
    ) {
      console.log("OrderEffects initialized");
      
    
  }


  loadOrders$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(orderActions.loadOrders),
      withLatestFrom(this.store.select(OrdersList)),
      // tap((orders) => console.log("Orders loaded", orders)),
      //Exhaustmap is used because on clicking order, first it should complete loading the orders
      //and not respond if double clicking on order
      exhaustMap(([action,orderslist])=>{
        // console.log("orderlist  ->",orderslist)
        if(orderslist.length){
          this.store.dispatch(setLoadingSpinner({status: false }));          
          return of(orderActions.dummyAction());
        }
        else{

          console.log("Order action", typeof action);
          

          return this.orderSvc.getOrders().pipe(
            map((response) => {
              //Set the loading to false again
              this.store.dispatch(setLoadingSpinner({status: false }));
              // Assuming "orders" is an array within the response
              const orders = response.documents; // Modify this according to your API response structure
    
              const ordersList = orders.map((order: any) => {
                
                
                // Process and transform each order as needed
                const processedOrder = {
                  // Map fields from "order" to your desired structure
                  // For example:
                  price: order.fields.price['integerValue'],
                  item: order.fields.item['stringValue'],
                  orderId: order.name
                  // Add more properties here
                };
                return processedOrder;
              });

    
              return ordersList; // Return the processed "ordersList"
            }),
            //What happens if loadorder fails. Write the code for that also
            map(orders => orderActions.loadOrdersSuccess({ orders}))
            )
            
          }
      }));

  });

  deleteOrder$ = createEffect(() =>
  this.actions$.pipe(
    ofType(orderActions.deleteOrder),
    exhaustMap((action) =>
      {
        
        return this.orderSvc.deleteOrders(action.orderId  ).pipe(
          switchMap(() => [
            orderActions.deleteOrderSuccess(),
          ]),
          catchError((error) =>
            of(orderActions.deleteOrderFailure())
          )
        )

      }
      
    )
  )
);

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
