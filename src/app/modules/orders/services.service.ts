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
  private bearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktcmVzdGF1cmFudC1jZTJmMCIsImF1ZCI6Im15LXJlc3RhdXJhbnQtY2UyZjAiLCJhdXRoX3RpbWUiOjE2OTQ4NTc4MTEsInVzZXJfaWQiOiI3a1lLY2h5QXVTVGl1UjZUWmJSY1VleDloY0UyIiwic3ViIjoiN2tZS2NoeUF1U1RpdVI2VFpiUmNVZXg5aGNFMiIsImlhdCI6MTY5NDg1NzgxMSwiZXhwIjoxNjk0ODYxNDExLCJlbWFpbCI6ImJubUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYm5tQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.D0lKfLAZKNUnsKqWjn2ho08aStOGcH8L8t82cHFFIj2bfZaq7QJQb_WOsSmtm8hKR4vcVwL-gUa1abMuhXOLGFmrq9wYRES6v1IwzJNEFl9lyADWLSBecoe51YVBbB5d_s1UhWnrG86EqSrqrLqc36TXP0OPfc5SDENilBrBTnPJ4AyDfzXEm5636P5vHHK9yeturZ0ZvwYrWifXVOkoG4gDQ1sbBbk8lIjjES3CjASh7uJatIG_h-ZtoIeQNUghdc1YWLlZGplzK18QbypfYHWpJkGstMB2Jn3DuRZuZhPvFOYC5AyGR1lgq9WXP7nmZVKcWDXa--Nex1ieIJhiUA"

  constructor(private http: HttpClient, private store: Store) {
  }

  // Method to fetch a list of orders
  getOrders() : Observable<any>{//Should return an Observable of type Order[], but returns {document:[]}
    return this.http.get<Order[]>(this.apiUrl,{
      headers: {"Authorization": 'Bearer ' + this.bearerToken}

    });
  }

  

}
