import { NgModule } from "@angular/core";
import { ProductComponent } from './component/product/product.component';
import { AppComponent } from "src/app/app.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
      CommonModule
    ],
    exports: [ProductComponent],
    declarations: [
      ProductComponent
    ]
})

export class ProductsModule{}