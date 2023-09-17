import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/modules/orders/order.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  
  activeMenu : String ;


  constructor(private store: Store) { 
    this.activeMenu = "Orders"

  }

  ngOnInit(): void {
    
  }




  

}
