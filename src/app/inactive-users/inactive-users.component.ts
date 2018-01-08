import { Component, Input } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  userService: UsersService;

 constructor(private tmpUsrSer: UsersService) {
   this.userService = tmpUsrSer;
   tmpUsrSer = null;
  }

}
