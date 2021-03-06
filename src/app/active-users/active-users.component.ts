import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];
  userService: UsersService;

  constructor(private tmpUsrSer: UsersService) {
    this.userService = tmpUsrSer;
    tmpUsrSer = null;
  }

  ngOnInit(){
    this.users = this.userService.activeUsers;
  }

}
