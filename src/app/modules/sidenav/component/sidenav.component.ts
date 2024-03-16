import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import * as OrderActions from '../../orders/store/actions/order.actions'
import * as ProductActions from '../../products/store/products.action'
import * as AuthActions from '../../auth/store/auth.action'
import { Order } from '../../orders/order.model';
import { Observable, Subject, Subscription, tap } from 'rxjs';
import { OrdersList } from '../../orders/store/selectors/orders.selector';
import { Router } from '@angular/router';
import { setLoadingSpinner } from 'src/app/shared/store/shared.action';
import { getidToken } from '../../auth/store/auth.selector';
import { LoginComponent } from '../../auth/login/login.component';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  ordersList$: any = [];
  subscription!: Subscription;
  isAuthenticated: boolean = false;

  onSideNav : Subject<string> = new Subject<string>();

  onSideNav$ :Observable<string> = this.onSideNav.asObservable();

  constructor(
    private store: Store,
    private router: Router,
    private dialog: MatDialog,
    private appService: AppService) { 
    // this.ordersList$ = this.store.select(OrdersList);
    this.store.select(getidToken).subscribe((token)=>{
      if(token){
        this.isAuthenticated = true;
      }
    })
    
  }

  ngOnInit(): void {
  
  }


  async getOrders(): Promise<void> {
    //This needs to be awaited because, the module needs to be loaded completely before
    //dispatching the loadOrders() action
    await this.router.navigate(['orders']);
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(OrderActions.loadOrders());
   
  }

  async getProducts(): Promise<void>{
    await this.router.navigate(['products']);
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(ProductActions.loadProducts());
      }

  openLogin(){
    this.dialog.open(LoginComponent,{
      height: '300px',
      width: '500px',
    })

  }

  handleClick(event: any): void{
    if(event.target instanceof HTMLAnchorElement){
      this.onSideNavClick(event);
    }
  }

  onSideNavClick(event: any): void{
    this.appService.currentTab.next(event.srcElement.innerText)
  }

  logout(){
    localStorage.clear();
    this.store.dispatch(AuthActions.logout());
  }





}