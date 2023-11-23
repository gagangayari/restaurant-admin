import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentTab : Subject<string> = new Subject();

  currentTab$ : Observable<string> = this.currentTab.asObservable();

  constructor()
  {

  } 
  
  saveState(key: string, state: any): void {
    localStorage.setItem(key, JSON.stringify(state));
  }

  loadState(key: string): any {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : null;
  }
}
