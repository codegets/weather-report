import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherApiService} from "./services/weather-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities : Response[] = [];

  constructor(private weatherApiService: WeatherApiService) {

  }

  ngOnInit(): void {
    this.weatherApiService.getList().subscribe(cities=>{
      console.log(cities);
      this.cities = cities;
    })
  }

}
