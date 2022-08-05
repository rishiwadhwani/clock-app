import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  @Input() hours = 0;
  @Input() minutes = 0;
  @Input() seconds = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
