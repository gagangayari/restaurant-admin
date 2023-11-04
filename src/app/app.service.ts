import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatePersistenceService {
  saveState(key: string, state: any): void {
    localStorage.setItem(key, JSON.stringify(state));
  }

  loadState(key: string): any {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : null;
  }
}
