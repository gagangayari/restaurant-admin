import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoadingState } from './shared/store/shared.selector';
import { User } from './modules/auth/auth.model';
import { BrowserReload } from './store/app.action';
import { AppState } from './store/app.reducer';
import { NavigationStart, Router } from '@angular/router';
import { getidToken } from './modules/auth/store/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'admin-app';

  // userKey: string | null ;
  appState : AppState | null = null;

  // showLoading : Observable<boolean>;

  constructor(private store: Store, private router: Router){
    this.router.events.subscribe((event)=>{

      if(event instanceof NavigationStart){
        // localStorage.setItem('aboy','aboy');
        // this.store.subscribe((store) => {
        //   localStorage.setItem('user', JSON.stringify(store))
        // })
        this.store.dispatch(BrowserReload({appState : this.appState!}))

        


      }
      
    })
    // this.userKey = localStorage.getItem('user');
    // if(this.userKey){
    //   this.appState = JSON.parse(localStorage.getItem(this.userKey)!);
    //   this.store.dispatch(BrowserReload({appState : this.appState!}))
    // }

    // this.showLoading = this.store.select(getLoadingState);
    // console.log("constructor app ");

    this.store.select(getidToken).subscribe(token =>{
      if(token){
        this.store.dispatch(BrowserReload({appState : this.appState!}))
      }

    })
    

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    
    
  }

}
