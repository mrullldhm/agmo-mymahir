import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  public baseURL: string = 'http://localhost:3000/api';

  constructor(public httpClient: HttpClient) {}

  httpGet(path: string) {
    let fullURL: string = this.baseURL + path;
    return new Promise((resolve, reject) => {
      this.httpClient.get(fullURL).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error: any) => {
          reject(error);
        },
      });
    });
  }
}
