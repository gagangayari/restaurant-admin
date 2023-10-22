import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Store } from '@ngrx/store';
import * as Actions from './store/actions/order.actions'

@Injectable({
  providedIn: 'root'
})
export class OrdersServices {

  private apiUrl = 'https://firestore.googleapis.com/v1/projects/my-restaurant-ce2f0/databases/(default)/documents/orders/'; // Replace with your API endpoint
  private bearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktcmVzdGF1cmFudC1jZTJmMCIsImF1ZCI6Im15LXJlc3RhdXJhbnQtY2UyZjAiLCJhdXRoX3RpbWUiOjE2OTcyNzk3OTEsInVzZXJfaWQiOiI3a1lLY2h5QXVTVGl1UjZUWmJSY1VleDloY0UyIiwic3ViIjoiN2tZS2NoeUF1U1RpdVI2VFpiUmNVZXg5aGNFMiIsImlhdCI6MTY5NzI3OTc5MSwiZXhwIjoxNjk3MjgzMzkxLCJlbWFpbCI6ImJubUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYm5tQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jx3RM02IYvhAwYt9WzsellyXkYjmAqEAjI4L1T1WVoQJSRrm9V71Y_1SwgBV_Rz9U7IXzS3tbc2qaX8wjIJagskaRCmsKcwNKfT-ldPb30adQfRUIulfhTy0oF_dWiXp9WDYHofPzcmIdFRFf1LvWkdGZFIbJgEDAPleXhUWrwmUUU9Avjn8lAIAYepfU332NL1b0w1qx0krKLcNOIxw5fZjaZ7pKDMF7yaKdQXMPa9arszxScRmKfRHc-6MkcTWsYbeQRZXsKc8_PbCYPvqwfVa0SSnzxGI8tHwjBknwXM6bBqXkpFtIuIgPlLMMKCuwV-z64xsw3jdS2kUKyGC1A"

  constructor(private http: HttpClient, private store: Store) {
  }

  sleep(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // Method to fetch a list of orders
  getOrders() : Observable<any>{//Should return an Observable of type Order[], but returns {document:[]}
    
    
    return this.http.get<Order[]>(this.apiUrl,{
      headers: {"Authorization": 'Bearer ' + this.bearerToken}

    });
  }


  deleteOrders(orderId : String) : Observable<any>{
    const temp = orderId.split('/');
    const id = (temp[temp.length - 1]);
    
    return this.http.delete<Order[]>(
      this.apiUrl + id, {
      headers: {"Authorization": 'Bearer ' + this.bearerToken}

      })
  }

  

}
