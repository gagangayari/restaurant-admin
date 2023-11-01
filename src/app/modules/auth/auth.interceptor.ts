import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getidToken } from "./store/auth.selector";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private store: Store){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token$ = this.store.select(getidToken)
        token$.subscribe((token) => {
            console.log("token", token);
            if(token){
                req = req.clone({
                    setHeaders: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
            }
            console.log(req);
            
        })
        console.log("request",req);
        return next.handle(req);
    }
}