import { Component, computed, inject, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  users = input.required<{ id: number; name: string }[]>({ alias: 'data' });

  removeUser = output<{ id: number; name: string }>({ alias: 'remove' });

  remove(user: { id: number; name: string }): void {
    this.removeUser.emit(user);
  }
}
