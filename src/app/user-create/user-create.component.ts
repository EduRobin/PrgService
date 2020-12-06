import { Component, OnInit } from '@angular/core';
import {IUsersEntity, UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  private username: string;
  users: IUsersEntity[] = [];

  constructor(private readonly usersService: UsersService, private readonly router: Router) { }

  ngOnInit() {
  }

  create(): void {
    this.usersService.create(this.username)
      .subscribe(user => this.router.navigateByUrl(`/user/${user.id}`));
  }

}
