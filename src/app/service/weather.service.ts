import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public actualWeatherData = null;

  constructor(
    private http: HttpClient
  ) {
  }

  public getWeatherByCityName(cityName: string): any {
    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', 'dff374d5b86373a365b46793e20f9c5c')
      .set('units', 'metric');

    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {params});
  }
}
