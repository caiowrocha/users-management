import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  getAll(): Observable<{ id: number; name: string }[]> {
    return of([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
      { id: 4, name: 'Dave' },
      { id: 5, name: 'Eve' },
    ]).pipe(delay(1500));
  }
}
