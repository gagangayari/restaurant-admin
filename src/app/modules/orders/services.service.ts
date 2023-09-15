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
  private bearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktcmVzdGF1cmFudC1jZTJmMCIsImF1ZCI6Im15LXJlc3RhdXJhbnQtY2UyZjAiLCJhdXRoX3RpbWUiOjE2OTQ3OTM0NDcsInVzZXJfaWQiOiI3a1lLY2h5QXVTVGl1UjZUWmJSY1VleDloY0UyIiwic3ViIjoiN2tZS2NoeUF1U1RpdVI2VFpiUmNVZXg5aGNFMiIsImlhdCI6MTY5NDc5MzQ0NywiZXhwIjoxNjk0Nzk3MDQ3LCJlbWFpbCI6ImJubUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYm5tQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WumjQpwDq7GSpSkGNwwJ77AYhhXB8CjeXq_8ynOJccvFPyMYzEuZqpnHIzRzhTqWDZ_NNLySGAcMLfNEGofskANgfrbSytsX1L1YwOFWhN8K1I92-VytpOX-2pIbyPE4RCYaiF_60j2pJCd_fOgsJl2cAu6ITP_en6UvlhrJemObd51EQxFGHEWvpDs8MhwwTd9rijZLp8D3vAimol8r1zPM9Pzu4w7kIQlgt1AYoAQ1pUa2ehMz-Se2HbKuuqzOUZn4HrUi7s3P1ipRmA-_CwZ9H0PaILt0hLzgrhYpZ2-Qy_qvVfs0D69hkVpvrUGXtuHVFAg6eeORXvt4YwKaKw"

  constructor(private http: HttpClient, private store: Store) {}

  // Method to fetch a list of orders
  getOrders() : Observable<any>{//Should return an Observable of type Order[], but returns {document:[]}
    return this.http.get<Order[]>(this.apiUrl,{
      headers: {"Authorization": 'Bearer ' + this.bearerToken}

    });
    // this.store.dispatch(Actions.loadOrders())
  }

  

}
