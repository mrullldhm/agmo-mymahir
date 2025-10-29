import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private isBrowser = typeof window !== 'undefined' && !!window.localStorage;

  constructor() {}

  setLocalStorage(key: string, value: any) {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getLocalStorage(key: string): any {
    if (this.isBrowser) {
      const item = localStorage.getItem(key);
      return item 
    }
    return null;
  }

  clearStorage() {
    return localStorage.clear();
  }
}
