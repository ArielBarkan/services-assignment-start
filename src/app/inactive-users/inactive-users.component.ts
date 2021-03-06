import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  userService: UsersService;

 constructor(private tmpUsrSer: UsersService) {
   this.userService = tmpUsrSer;
   tmpUsrSer = null;
  }

  ngOnInit(){
   this.users = this.userService.inactiveUsers;
  }
}
