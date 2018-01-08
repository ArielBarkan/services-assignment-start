export class CounterService {
  counterActive = 0;
  counterInactive = 0;
  doLog(status: any) {
    (status === 'active') ? this.counterActive++ : this.counterInactive++;
    console.log('inactive->active counter = ' + this.counterActive);
    console.log('active->inactive counter = ' + this.counterInactive);
  }
}
