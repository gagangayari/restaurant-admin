import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/modules/orders/order.model';
import {MatTableModule} from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  
  activeMenu : string  = '';

  constructor(
    private store: Store,
    private router: Router,
    private appService: AppService) { 
    this.appService.currentTab$.subscribe(tab => this.activeMenu = tab)
    

  }
  ngOnInit() {
    
  }
  




  

}
