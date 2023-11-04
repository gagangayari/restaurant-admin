import { NgModule } from "@angular/core";
import { ProductComponent } from './component/product/product.component';
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { productsReducer } from "./store/products.reducer";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    imports: [
      CommonModule,
      ProductsRoutingModule,
      StoreModule.forFeature("productsState",productsReducer)

    ],
    exports: [ProductComponent],
    declarations: [
      ProductComponent,
    ]
})

export class ProductsModule{}