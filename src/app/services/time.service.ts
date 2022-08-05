import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  currentTimeSubject : Subject<any> = new Subject<any>();
  currentAppTime: Date = new Date();
  currentAppTimeHours = 0;
  currentAppTimeMinutes = 0;
  currentAppTimeSeconds = 0;
  intervalID: any;

  constructor() {
    this.setAppTime();
  }

  setAppTime(date?: Date): void {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
    this.currentAppTime = date ? date : new Date();
    this.intervalID = setInterval(() => {
      this.currentTimeSubject.next(this.currentAppTime);
      this.currentAppTimeHours = this.currentAppTime.getHours();
      this.currentAppTimeMinutes = this.currentAppTime.getMinutes();
      this.currentAppTimeSeconds = this.currentAppTime.getSeconds();
      this.incrementTime(this.currentAppTime);
    }, 1000);
  }

  incrementTime(d: Date): void {
    this.currentAppTime = new Date(d.getTime() + 1000);
  }
}
