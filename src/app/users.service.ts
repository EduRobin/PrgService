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
    const id = ++this.nextId;
    const user: IUsersEntity = {id, username};
    this.users.push(user);
    return of(user);
  }
}


