import {Injectable} from '@angular/core';
import {forkJoin, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  hostUrl  = 'http://api.weatherstack.com/current';
  apiKey = 'abdd8978dfef75c3be4c5dc19a8c7743';

  constructor(private http: HttpClient) {
  }


  getList(): Observable<Response[]> {
    let weatherList: Observable<Response>[] = [];
    ['Prague' , 'Africa','Melbourne '].forEach(city => {
      weatherList.push(this.http.get<Response>(`${this.hostUrl}?access_key=${this.apiKey}&query=${city}`))
    })
    return forkJoin(weatherList);
  }

}
