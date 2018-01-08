import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Chipopo', 'Ariel'];
  inactiveUsers = ['Vincent', 'Rembrandt'];

  constructor(private counterClass: CounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterClass.doLog('active');
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterClass.doLog('inactive');
  }
}
