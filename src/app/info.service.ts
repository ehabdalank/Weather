import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
constructor(private http:HttpClient){}
weatherAPI= 'https://weatherapi-com.p.rapidapi.com/current.json';
XRapidAPIHostValue='weatherapi-com.p.rapidapi.com';
XRapidAPIHostName='X-RapidAPI-Host';
XRapidAPIKeyName='X-RapidAPI-Key';
XRapidAPIKeyValue='9e31bd7084mshbc5fc8f783c17ddp11f6e2jsnd81fe00fc809';



getWeatherData(cityName:string): Observable<WeatherData> {
  return this.http.get<WeatherData>(this.weatherAPI, {
    headers : new HttpHeaders()
    .set(this.XRapidAPIHostName,this.XRapidAPIHostValue)
    .set(this.XRapidAPIKeyName,this.XRapidAPIKeyValue),
    params:new HttpParams()
    .set('q',cityName)
    .set('units','metric')
    .set('mode','json')
  })
}
  
}
