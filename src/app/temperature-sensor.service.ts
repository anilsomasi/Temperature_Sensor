import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs/index';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TemperatureSensorService {

  //public sendMinutesData = new BehaviorSubject({ mins: 0 , temp : 0});
  public sendMinutesData: Subject<any> = new Subject<any>();

  constructor(private _http: HttpClient) { }

getMonthlyData(){
 const  weatherDates = [ 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
 const temp_max = [ 10, 12,18, 24, 5,16,19,22,23,1,14,11,25,7,13,18,14,8,19,20,21,22,22,18,4,2,8,1,6,4]
  let dates = [];
  weatherDates.forEach(value => {
    dates.push('Jan '+value)
  });
  return { dates: dates , temp: temp_max };
}
  getMinutesData(){
   const temp_max = [ 10, 12,-8, 0, 1,2,19,22,23,1,3,11,25,7,13,18,14,8,9,20,21,2,22,0,4,2,8,1,6,4]
    return temp_max[Math.floor(Math.random()*temp_max.length)];

  }

  dailyForecast() {
    return {
  "message": "",
  "cod": "200",
  "city_id": 2643743,
  "calctime": 0.0875,
  "cnt": 3,
  "list": [
    {
      "main": {
        "temp": 279.946,
        "temp_min": 279.946,
        "temp_max": 279.946,
        "pressure": 1016.76,
        "sea_level": 1024.45,
        "grnd_level": 1016.76,
        "humidity": 100
      },
      "wind": {
        "speed": 4.59,
        "deg": 163.001
      },
      "clouds": {
        "all": 92
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "rain": {
        "3h": 2.69
      },
      "dt": 1485717216
    },
    {
      "main": {
        "temp": 282.597,
        "temp_min": 282.597,
        "temp_max": 282.597,
        "pressure": 1012.12,
        "sea_level": 1019.71,
        "grnd_level": 1012.12,
        "humidity": 98
      },
      "wind": {
        "speed": 4.04,
        "deg": 226
      },
      "clouds": {
        "all": 92
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "rain": {
        "3h": 0.405
      },
      "dt": 1485745061
    },
    {
      "main": {
        "temp": 279.38,
        "pressure": 1011,
        "humidity": 93,
        "temp_min": 278.15,
        "temp_max": 280.15
      },
      "wind": {
        "speed": 2.6,
        "deg": 30
      },
      "clouds": {
        "all": 90
      },
      "weather": [
        {
          "id": 701,
          "main": "Mist",
          "description": "mist",
          "icon": "50d"
        },
        {
          "id": 741,
          "main": "Fog",
          "description": "fog",
          "icon": "50d"
        }
      ],
      "dt": 1485768552
    }
  ]
};
  }
}
