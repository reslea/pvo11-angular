import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherInfo
{
  date: string,
  temperatureC: number,
  TemperatureF: number,
  summary: string
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weatherInfos?: WeatherInfo[] | null = null;


  constructor(private readonly client: HttpClient) {
    this.client.get<WeatherInfo[]>('https://rpo11-api.herokuapp.com/WeatherForecast')
    .subscribe(data => this.weatherInfos = data);
   }


}
