import { NgModule } from "@angular/core";
import { ProductComponent } from './component/product/product.component';
import { AppComponent } from "src/app/app.component";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { productsReducer } from "./store/products.reducer";

@NgModule({
    imports: [
      CommonModule,
      StoreModule.forFeature("productsState",productsReducer)

    ],
    exports: [ProductComponent],
    declarations: [
      ProductComponent,
    ]
})

export class ProductsModule{}