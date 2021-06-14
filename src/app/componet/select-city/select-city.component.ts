import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WeatherService} from '../../service/weather.service';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {

  public cityForm = new FormGroup({
    cityName: new FormControl('', Validators.required)
  });

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSelectCity(): void {
    const cityName = this.cityForm.value.cityName;
    this.weatherService.getWeatherByCityName(cityName)
      .pipe(
        map((data) => {
          this.weatherService.actualWeatherData = data;
          this.router.navigate(['/', 'show-weather']);
        })
      )
      .subscribe();
  }
}
