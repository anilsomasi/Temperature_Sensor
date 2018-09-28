import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTemperatureComponent } from './monthly-temperature.component';

describe('MonthlyTemperatureComponent', () => {
  let component: MonthlyTemperatureComponent;
  let fixture: ComponentFixture<MonthlyTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
