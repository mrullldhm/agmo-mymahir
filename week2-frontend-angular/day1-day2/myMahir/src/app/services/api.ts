import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  httpPost(path: string, payload: any) {
    let fullURL: string = this.baseURL + path;
    let token: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJiYXJ1QGdtYWlsLmNvbSIsImlhdCI6MTc2MTgxMzk4OCwiZXhwIjoxNzYxOTAwMzg4fQ.-qXx4-Go0degtYb4W0hezyHXC-NHBjomkJnfO9mS9ZM';

    let headers = {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }).set(
        'Content-Type',
        'application/json'
      ),
    };

    return new Promise((resolve, reject) => {
      this.httpClient.post(fullURL, payload, headers).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error: any) => {
          resolve(error);
        },
      });
    });
  }
}
