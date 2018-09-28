import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemperatureSensorService } from './temperature-sensor.service';
import { DailyTemperatureComponent } from './daily-temperature/daily-temperature.component';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyTemperatureComponent } from './monthly-temperature/monthly-temperature.component';

const routes: Routes = [
  {path: '', component: DailyTemperatureComponent}, // default
  {path: 'daily', component: DailyTemperatureComponent},
  {path: 'monthly', component: MonthlyTemperatureComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    DailyTemperatureComponent,
    MonthlyTemperatureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [TemperatureSensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
