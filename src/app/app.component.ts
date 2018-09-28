import { Component } from '@angular/core';
import { TemperatureSensorService } from './temperature-sensor.service';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  chart = []; // This will hold our chart info
  time: number = 0;
  mins: number = 1;
  test = { mins: 0, temp: 0 };

  constructor(private _weather: TemperatureSensorService, private router: Router) {
  }

  count() {
    this.time++;
    if (this.time === 60) {
      this.time = 0;
      this.test.mins = this.mins;
      this.test.temp = this._weather.getMinutesData();
      this._weather.sendMinutesData.next(this.test);
      if (this.mins === 60)
        this.mins = 0;
      this.mins++;
    }
    this.timer();
  }

  timer() {
    setTimeout(() => this.count(), 1000);
  }

  ngOnInit() {
    this.timer();
  }

  navigate(value) {
    this.router.navigateByUrl(value);
    this.time = 0;
  }
}
