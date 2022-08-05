import { TimeService } from './../../services/time.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  @ViewChild('secondHand', { static: false })
  secondHand!: ElementRef;
  @ViewChild('minuteHand', { static: false })
  minuteHand!: ElementRef;
  @ViewChild('hourHand', { static: false })
  hourHand!: ElementRef;

  constructor(public timeService: TimeService) { }

  ngOnInit(): void {
    this.timeService.currentTimeSubject.subscribe((data) => {
      this.updateClock(data);
     })
  }

  updateClock(date: Date): void {
    this.secondHand.nativeElement.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
    this.minuteHand.nativeElement.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
    this.hourHand.nativeElement.style.transform = `rotate(${date.getHours() * 30 + date.getMinutes() * 0.5}deg)`;
  }

}
