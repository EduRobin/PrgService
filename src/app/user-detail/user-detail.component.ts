import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUsersEntity, UsersService} from '../users.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: IUsersEntity;
  edit = false;
  newUsername: string;

  constructor(private readonly  activatedRoute: ActivatedRoute, private readonly  usersService: UsersService, private readonly router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      p => {
        const id = p.get('id');
        const idNumber = parseInt(id, 10);
        console.log(idNumber);
        this.usersService.getUserById(idNumber).subscribe(
          u => this.user = u,
          e => console.error(e));
      }
    );
    console.log(this.user);
  }

  editUser(id: number): void {
    this.usersService.editUser(id, this.newUsername);
    this.edit = false;
    this.router.navigateByUrl('/users');
  }
  showEdit(): void {
    this.edit = true;
  }

}
