import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { productItem } from "./products.model";

@Injectable({
    providedIn : "root"
})
export class ProductsService {
    private apiUrl = 'https://firestore.googleapis.com/v1/projects/my-restaurant-ce2f0/databases/(default)/documents/Products/'; // Replace with your API endpoint

    constructor(
        private http: HttpClient,
    ) { }

    getProducts() : Observable<any>{//Should return an Observable of type Order[], but returns {document:[]}
        return this.http.get<any[]>(this.apiUrl);
      }
    

}