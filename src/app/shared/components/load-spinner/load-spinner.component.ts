import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLoadingState } from '../../store/shared.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-load-spinner',
  templateUrl: './load-spinner.component.html',
  styleUrls: ['./load-spinner.component.scss']
})
export class LoadSpinnerComponent implements OnInit {

  loadSpinner : Observable<boolean>;

  constructor(private store: Store){
    this.loadSpinner = this.store.select(getLoadingState);
  }

  ngOnInit(): void {

  }

}
