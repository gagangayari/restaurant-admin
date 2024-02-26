import { Component } from '@angular/core';
import { productItem } from '../../products.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { getLoadingState } from 'src/app/shared/store/shared.selector';
import { ProductsList } from '../../store/products.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showLoading: Observable<boolean>;

  productItems: any = [];
  productListSubscription: Subscription;

  constructor(private store: Store) {
    this.showLoading = this.store.select(getLoadingState);

    this.productListSubscription = this.store
      .select(ProductsList)
      .subscribe(data => {
        console.log("data ", data);
        
        this.productItems = data
      })
  }
}
