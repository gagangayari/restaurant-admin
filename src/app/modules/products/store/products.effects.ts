import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as productActions from "./products.action";
import { exhaustMap, map, of, switchMap, withLatestFrom } from "rxjs";
import { ProductsService } from "../products.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { ProductsList } from "./products.selector";
import { setLoadingSpinner } from "src/app/shared/store/shared.action";

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

            exhaustMap(([action, productsList] : [any, any]) => {
                // console.log("items : ",items)

                if(productsList.length){
                    this.store.dispatch(setLoadingSpinner({status: false }));
                    return of(productActions.dummyAction())
                }

                else{
                    this.productSvc.getProducts().pipe(
                        map((response) => {
    
                            const productItems = response['documents'].map((element : any) => {
    
                                const item = {
                                    'item' : element['fields']['item']['stringValue'],
                                    'Desc' : element['fields']['Desc']['stringValue'],
                                    'price' : element['fields']['price']['integerValue'],
                                    'imgUrl' : element['fields']['imgUrl']['stringValue'],
                                }
    
                                return item;
                                
                            });
                            this.store.dispatch(productActions.loadProductSuccess({products: productItems}));
                            this.store.dispatch(setLoadingSpinner({status: false }));
    
                            
                        }
                    )).subscribe()

                }

               


                return of(productActions.dummyAction())

            })
            
                    
    )})
    }