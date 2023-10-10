import { Component, OnInit } from '@angular/core';
import { InfoService } from './info.service';
import { WeatherData, Current } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName:string='lebanon';

  constructor(private weatherService:InfoService){

  }
  weatherdata?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
   
  }

  onSubmit(){
   this.getWeatherData(this.cityName);
   this.cityName=' ';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.weatherdata=response;
        console.log(response);
      }
    })
  }
  
}
