import { NgModule } from "@angular/core";
import { LoadSpinnerComponent } from "./components/load-spinner/load-spinner.component";
import { CommonModule } from "@angular/common";
import { OrdersModule } from "../modules/orders/orders.module";

@NgModule(
    {
        declarations : [LoadSpinnerComponent],
        imports : [CommonModule],
        exports :[ LoadSpinnerComponent]
    })

export class SharedModule {}

