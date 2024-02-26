import { NgModule } from "@angular/core";
import { ProductComponent } from './component/product/product.component';
import { CommonModule } from "@angular/common";
// import { StoreModule } from "@ngrx/store";
// import { productsReducer } from "./store/products.reducer";
import { ProductsRoutingModule } from "./products-routing.module";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./store/products.effects";
import { SharedModule } from "src/app/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { productsReducer } from "./store/products.reducer";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      ProductsRoutingModule,

      //Check if below line is initialized in other projects. For a feature module.
      StoreModule.forFeature("productsState",productsReducer),
      EffectsModule.forFeature([ProductEffects]),


    ],
    exports: [ProductComponent],
    declarations: [
      ProductComponent,
    ]
})

export class ProductsModule{}