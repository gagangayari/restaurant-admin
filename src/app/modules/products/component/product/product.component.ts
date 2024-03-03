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

  productItems: any = [
    {'item': 'Chicken', 'Desc': 'ABV'},
  ];
  productListSubscription: Subscription;
  imageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/my-restaurant-ce2f0.appspot.com/o/jonathan-borba-uB7q7aipU2o-unsplashLarge.jpeg?alt=media&token=1a0d0bdb-cf2f-4ad5-804c-0bbeee84fedd';

  constructor(private store: Store) {
    this.showLoading = this.store.select(getLoadingState);
    // this.getImageFromFirebaseStorage()

    this.productListSubscription = this.store.select(ProductsList)
      .subscribe((data: any) => {
        console.log("data ", data[0]);
        
        this.productItems = data
      })
  }

  getImageFromFirebaseStorage() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://firestore.googleapis.com/v1/projects/my-restaurant-ce2f0/gs://my-restaurant-ce2f0.appspot.com/jonathan-borba-uB7q7aipU2o-unsplashLarge.jpeg', true);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(blob);
      }
    };

    xhr.send();
  }

  ngOnDestroy() {
    this.productListSubscription.unsubscribe();
  }
}
