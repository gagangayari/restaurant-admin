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
  private bearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktcmVzdGF1cmFudC1jZTJmMCIsImF1ZCI6Im15LXJlc3RhdXJhbnQtY2UyZjAiLCJhdXRoX3RpbWUiOjE2OTQ4ODYwMzMsInVzZXJfaWQiOiI3a1lLY2h5QXVTVGl1UjZUWmJSY1VleDloY0UyIiwic3ViIjoiN2tZS2NoeUF1U1RpdVI2VFpiUmNVZXg5aGNFMiIsImlhdCI6MTY5NDg4NjAzMywiZXhwIjoxNjk0ODg5NjMzLCJlbWFpbCI6ImJubUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYm5tQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mZQB24Yk7a2DQmJgp8dArnLGtvJyhrBPvAeYNUMvLvPTr8L7RZikdX4_TSdamewKcV_utvlKtyBeVNKMcxJpZevKmEb1W_MrHOCyY5rhYckz4X7MJ6tHdXa0eHIqIZ8JeJh8bBAOxWt_Wjc9qguv2-mY_A3JhPiDSSlSnujpxQSb8tE3zW21mgvmOQXrHyR5aUHQW1vbzGf8CZ_N4vYQ-lLLozenF5XzVyCRSbl54ucuh3pVlqvg3WWQcTIzc1IzO9G2EX05r2xM5igQRBiu65F8RtRPPEhyhBKx6TFwFlq4bYIXDnHFHM0zvrM9OyR_tDIykolVotBPd8df9u-P_g"

  constructor(private http: HttpClient, private store: Store) {
  }

  // Method to fetch a list of orders
  getOrders() : Observable<any>{//Should return an Observable of type Order[], but returns {document:[]}
    return this.http.get<Order[]>(this.apiUrl,{
      headers: {"Authorization": 'Bearer ' + this.bearerToken}

    });
  }

  

}
