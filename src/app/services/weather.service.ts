import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coordinates, Units, WeatherGetResponse } from 'src/app/types/types';
import { timer, switchMap } from 'rxjs';

@Injectable()
export class WeatherService {
  private basePath = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  public byCoordinates(coordinates: Coordinates) {
    const { latitude, longitude } = coordinates;
    const params = new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('units', Units.metric)
      .set('apiKey', environment.apiKey);

    return timer(Math.random() * 10_000).pipe(
      switchMap(() =>
        this.http.get<WeatherGetResponse>(this.basePath, { params })
      )
    );
  }
}
