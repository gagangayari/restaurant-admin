import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as productActions from "./products.action";
import { exhaustMap, map, of, switchMap, withLatestFrom } from "rxjs";
import { ProductsService } from "../products.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { ProductsList } from "./products.selector";

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productSvc: ProductsService, 
        private store: Store<AppState>
        ) {
            console.log("Products Effects Initialized");
            
        }

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(productActions.loadProducts),
            
            withLatestFrom(this.store.select(ProductsList)), //without this line the below line doesnt work

            exhaustMap(([action, items]) =>{
                // console.log("items : ",items)

                this.productSvc.getProducts().pipe(
                    map((response) => {
                        console.log("res",response);
                        
                    }
                )).subscribe()

                return of(productActions.dummyAction())

            })
            
                    
    )})
    }