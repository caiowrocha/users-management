import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersList } from './list/components/users-list/users-list';

@Component({
  selector: 'app-root',
  imports: [UsersList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly #users = signal([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Dave' },
    { id: 5, name: 'Eve' },
  ]);

  users = computed(() => this.#users());

  remove(user: { id: number; name: string }) {
    this.#users.update((users) => users.filter((u) => u.id !== user.id));
  }
}
