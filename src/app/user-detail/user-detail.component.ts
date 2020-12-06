import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUsersEntity, UsersService} from '../users.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private user: IUsersEntity;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly usersService: UsersService, private readonly router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id: string = p.get('id'); // '1'
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .pipe(delay(500))
        .subscribe(
          u => this.user = u,
          e => {
            console.log(e);
            this.router.navigateByUrl('/users');
          }
        );
    });
  }

}
