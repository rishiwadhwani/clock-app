import { InactivityService } from './../../services/inactivity.service';
import { WorldTimeService } from './../../services/world-time.service';
import { TimeService } from './../../services/time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-set-buttons',
  templateUrl: './time-set-buttons.component.html',
  styleUrls: ['./time-set-buttons.component.scss'],
})
export class TimeSetButtonsComponent implements OnInit {
  timezone: any;

  constructor(
    public timeService: TimeService,
    public worldTimeService: WorldTimeService,
    public inactivityService: InactivityService
  ) {}

  ngOnInit(): void {}

  reduceFive(factor: string): void {
    switch (factor) {
      case 'Seconds':
        this.timeService.setAppTime(
          new Date(this.timeService.currentAppTime.getTime() - 5 * 1000)
        );
        break;
      case 'Minutes':
        this.timeService.setAppTime(
          new Date(this.timeService.currentAppTime.getTime() - 5 * 60 * 1000)
        );
        break;
      case 'Hours':
        this.timeService.setAppTime(
          new Date(
            this.timeService.currentAppTime.getTime() - 5 * 60 * 60 * 1000
          )
        );
        break;
    }
    this.inactivityService.resetInactivityTimer();
  }

  increaseFive(factor: string): void {
    switch (factor) {
      case 'Seconds':
        this.timeService.setAppTime(
          new Date(this.timeService.currentAppTime.getTime() + 5 * 1000)
        );
        break;
      case 'Minutes':
        this.timeService.setAppTime(
          new Date(this.timeService.currentAppTime.getTime() + 5 * 60 * 1000)
        );
        break;
      case 'Hours':
        this.timeService.setAppTime(
          new Date(
            this.timeService.currentAppTime.getTime() + 5 * 60 * 60 * 1000
          )
        );
        break;
    }
    this.inactivityService.resetInactivityTimer();
  }

  resetClocks(): void {
    this.timeService.setAppTime(new Date());
    this.inactivityService.resetInactivityTimer();
  }

  setTimezone(): void {
    this.worldTimeService.getTimeForTimezone(this.timezone);
    this.inactivityService.resetInactivityTimer();
  }
}
