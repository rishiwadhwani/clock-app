import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSetButtonsComponent } from './time-set-buttons.component';

describe('TimeSetButtonsComponent', () => {
  let component: TimeSetButtonsComponent;
  let fixture: ComponentFixture<TimeSetButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSetButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
