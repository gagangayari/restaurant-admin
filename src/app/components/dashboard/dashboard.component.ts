import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/modules/orders/order.model';
import {MatTableModule} from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { getidToken } from 'src/app/modules/auth/store/auth.selector';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  
  activeMenu : string  = '';
  isLoggedIn : boolean = false;

  constructor(
    private store: Store,
    private authService: AuthService,
    private appService: AppService) { 
    
    this.appService.currentTab$.subscribe(tab => this.activeMenu = tab);

    this.store.select(getidToken).subscribe((token)=>{
      if(token){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    })
    

  }
  ngOnInit() {
    
  }
  




  

}
