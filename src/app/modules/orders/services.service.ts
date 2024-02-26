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
  // private bearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzZDA3YmJjM2Q3NWM2OTQyNzUxMGY2MTc0ZWIyZjE2NTQ3ZDRhN2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktcmVzdGF1cmFudC1jZTJmMCIsImF1ZCI6Im15LXJlc3RhdXJhbnQtY2UyZjAiLCJhdXRoX3RpbWUiOjE2OTc5NTU4MTMsInVzZXJfaWQiOiI3a1lLY2h5QXVTVGl1UjZUWmJSY1VleDloY0UyIiwic3ViIjoiN2tZS2NoeUF1U1RpdVI2VFpiUmNVZXg5aGNFMiIsImlhdCI6MTY5Nzk1NTgxMywiZXhwIjoxNjk3OTU5NDEzLCJlbWFpbCI6ImJubUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYm5tQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qpqX1f-JeN9Rg2FJob5-l3zEhrJAug965DzooOWO3q50FqGDk_msPH11-ESw6XuxBigFdByNvBBABNNtkRjBGRF5tjcOp2jpi2ZyAL5-eZbv8hpBnTjCMXraFMljx7tAyes8sYKQoMRMM0jLB789fWzLhJ7JA9s8mrjgjKAoMOACLUKdogNRd65hqbTsvC2oHop2LmtI9UDiHZFq2-6-83RA3a14eEU79W0_7YwIgbGBxs2gmKwqqYOmlWYS7xKQR-sqS5U5Z5hqHrI0r7gdd0hzc7rqyABQ5aNxZ8bsRXQmyGt-LPA0-WZRnO7-kuj3NzZ3-RWXgdDD1O9jwwPnLQ"

  constructor(private http: HttpClient, private store: Store) {
  }

  sleep(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // Method to fetch a list of orders
  getOrders() : Observable<any>{//Should return an Observable of type Order[], but returns {document:[]}
    return this.http.get<Order[]>(this.apiUrl);
  }


  deleteOrders(orderId : String) : Observable<any>{
    const temp = orderId.split('/');
    const id = (temp[temp.length - 1]);
    return this.http.delete<Order[]>(this.apiUrl + id)
  }

  

}
