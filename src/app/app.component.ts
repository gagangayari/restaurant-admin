import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoadingState } from './shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-app';

  showLoading : Observable<boolean>;

  constructor(private store: Store){
    this.showLoading = this.store.select(getLoadingState);
    console.log("The spinner ", this.showLoading);
    

  }

}
