import { Component, OnInit } from '@angular/core';
import { TemperatureSensorService } from '../temperature-sensor.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-monthly-temperature',
  templateUrl: './monthly-temperature.component.html',
  styleUrls: [ './monthly-temperature.component.css' ]
})
export class MonthlyTemperatureComponent implements OnInit {
  chart: any;

  constructor(private _weather: TemperatureSensorService) {
  }

  ngOnInit() {

    const data = this._weather.getMonthlyData();

    const dates = data.dates;
    const temp = data.temp;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data: temp,
            borderColor: '#3cba9f',
            fill: false
          }
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

}
