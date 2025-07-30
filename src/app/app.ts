import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UsersList } from './list/components/users-list/users-list';
import { SearchInput } from './list/components/search-input/search-input';
import { Users } from './shared/services/users';
@Component({
  selector: 'app-root',
  imports: [UsersList, SearchInput],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  usersService = inject(Users);
  search = signal<string>('');
  users = signal<{ id: number; name: string }[]>([]);
  isLoading = signal<boolean>(true);

  filteredUsers = computed(() =>
    this.users().filter((user) =>
      user.name.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  ngOnInit(): void {
    this.usersService
      .getAll()
      .subscribe((users) => {
        this.users.set(users)
        this.isLoading.set(false)
      });
  }

  remove(user: { id: number; name: string }) {
    this.users.update((users) => users.filter((u) => u.id !== user.id));
  }
}
