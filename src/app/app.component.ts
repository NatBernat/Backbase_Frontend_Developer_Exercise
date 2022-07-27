import { Component, OnInit } from '@angular/core';
import { getRequest } from './utils/getRequest';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Weather app';
  message = 'fetch error';
  // It is recommended to set private properties/methods that are meant to be used internal.
  // Every prop/method without access modifier is `public`.
  // Reference: https://www.typescriptlang.org/docs/handbook/2/classes.html
  private firstPlace = { lat: 41.3879, lon: 2.16992 };
  firstPlaceData: any; // = getRequest(this.firstPlace);

  // Define a public observable object so it can be subscribed
  // from the template using `async` pipe, which also release the
  // resource when the `AppComponent` is destroyed
  // Reference: https://angular.io/guide/observables-in-angular#async-pipe
  currentWeather$ = this.weatherService.byCoordinates({ latitude: 41.3879, longitude: 2.16992 });

  // We are able to inject the WeatherService dependency
  // because it is provided in the `AppModule`
  // Reference: https://angular.io/tutorial/toh-pt4#add-services
  constructor(private weatherService: WeatherService) {}

  // In angular the Componnent has some lifecycle hooks you can
  // use to setup and release resources, initialize properties, etc...
  // Reference: https://angular.io/guide/lifecycle-hooks
  async ngOnInit() {
    // getRequest returns a Promise so we need to await for the weather api
    // response, if you assign directly the returned value you are storing
    // the Promise object, not the expected response value.
    this.firstPlaceData = await getRequest(this.firstPlace);
  }
}
