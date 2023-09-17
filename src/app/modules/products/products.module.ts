import { NgModule } from "@angular/core";
import { ProductComponent } from './component/product/product.component';
import { AppComponent } from "src/app/app.component";

@NgModule({
    imports: [],
    exports: [ProductComponent],
    declarations: [
      ProductComponent
    ]
})

export class ProductsModule{}