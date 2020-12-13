import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface IUsersEntity {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private nextId = 1;

  private users: IUsersEntity[] = [];

  constructor() { }

  getAllUsers(): Observable<IUsersEntity[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<IUsersEntity> {
    return of(this.users.find(u => u.id === id));
  }

  create(username: string): Observable<IUsersEntity> {
    const user: IUsersEntity = {id: this.nextId, username};
    this.nextId++;
    this.users.push(user);
    return of(user);
  }

  editUser(id: number, newUsername: string): boolean {
    if (this.users.find(u => u.id === id)) {
      const user: IUsersEntity = this.users.find(u => u.id === id);
      if (newUsername.length > 1) {user.username = newUsername; }
      return true;
    }
    return false;
  }
}


