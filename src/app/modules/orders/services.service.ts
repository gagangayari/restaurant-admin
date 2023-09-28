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
  private bearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFkNWM1ZTlmNTdjOWI2NDYzYzg1ODQ1YTA4OTlhOWQ0MTI5MmM4YzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktcmVzdGF1cmFudC1jZTJmMCIsImF1ZCI6Im15LXJlc3RhdXJhbnQtY2UyZjAiLCJhdXRoX3RpbWUiOjE2OTU5MTkxMjgsInVzZXJfaWQiOiI3a1lLY2h5QXVTVGl1UjZUWmJSY1VleDloY0UyIiwic3ViIjoiN2tZS2NoeUF1U1RpdVI2VFpiUmNVZXg5aGNFMiIsImlhdCI6MTY5NTkxOTEyOCwiZXhwIjoxNjk1OTIyNzI4LCJlbWFpbCI6ImJubUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYm5tQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.wtMh1q4qAwCO-bSvpaa99ZPNTPBakmSprkNODqvobCDYATgL3CY7Ti5CBiPutRRSr7quQb2NEEu2qyZEo3Zh1leAVagHKtn15oO_vAjdbA3ivHtA4XR40Ehj6xbEmzqWwf8UP6SRzk8i5pm1cDZrAY5RYXLm3Eq5mbpNdl1cNazUr8ZTBlJxwdp9rHhwIasBN0LEe8N6R-TgOmttuRxlRUGdou6u6UFfKh0YKJLyKklFBJxn7xTbSY2V_30IYo6K8G-HB2CqoxdcRUZVSrhIyJ2NYJSzVztuOZQJL0V4xg85t-fBvdVTMvLX5hJheqJoCUUVptyA0z5Uu4k83wVCRw"

  constructor(private http: HttpClient, private store: Store) {
  }

  // Method to fetch a list of orders
  getOrders() : Observable<any>{//Should return an Observable of type Order[], but returns {document:[]}
    return this.http.get<Order[]>(this.apiUrl,{
      headers: {"Authorization": 'Bearer ' + this.bearerToken}

    });
  }

  

}
