import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TemperatureSensorService } from '../temperature-sensor.service';

@Component({
  selector: 'app-daily-temperature',
  templateUrl: './daily-temperature.component.html',
  styleUrls: [ './daily-temperature.component.css' ]
})
export class DailyTemperatureComponent implements OnInit {
  dailyChart: any;
  temp = [];
  minutes = [];

  constructor(private _weather: TemperatureSensorService) {
  }

  prepareChart() {
    this.dailyChart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.minutes,
        datasets: [
          {
            data: this.temp,
            borderColor: '#3cba9f',
            fill: false
          }/*,
          {
            data: temp_min,
            borderColor: "#ffcc00",
            fill: false
          },*/
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [ {
            label: 'x asis',
            display: true
          } ],
          yAxes: [ {
            display: true
          } ],
        }
      }
    });
  }

  ngOnInit() {
    const currentTime = new Date();
    const time = `
      ${currentTime.getHours()} :  ${currentTime.getMinutes()}
      `;
    this.minutes.push(time);
    this.temp.push(2);
    this.prepareChart();
    this._weather.sendMinutesData.subscribe(value => {
      let hrs = currentTime.getHours();
      currentTime.getMinutes();
      this.temp.push(value.temp);
      if (value.mins === 60) {
        hrs = hrs + 1;
        value.mins = 0;
      }
      const time = `
      ${hrs} :  ${currentTime.getMinutes() + value.mins }
      `;
      this.minutes.push(time);
      this.prepareChart();
    });
  }
}
