import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  apiUrl: string = "http://localhost:3000/users";

  httpClient = inject(HttpClient);

  getAll(): Observable<{ id: number; name: string }[]> {
    return this.httpClient.get<{ id: number; name: string }[]>(this.apiUrl);
  }
}
