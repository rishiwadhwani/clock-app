import { TimeService } from './time.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeService {
  timezoneList: any;

  constructor(private http: HttpClient, public timeService: TimeService) {
    console.log('in world time service constructor');
    const timezoneSub = this.http.get('https://worldtimeapi.org/api/timezone').subscribe((data: any) => {
      this.timezoneList = data;
      timezoneSub.unsubscribe();
    });
  }

  getTimeForTimezone(timezone: string): any {
    const getTimeSub = this.http.get(`https://worldtimeapi.org/api/timezone/${timezone}`).subscribe((data: any) => {
      const d = new Date().toLocaleString("en-US", {timeZone: data.timezone});
      this.timeService.setAppTime(new Date(d));
      getTimeSub.unsubscribe();
    });
  }
}
