import { Component } from '@angular/core';
import { getRequest } from 'src/utils/getRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Weather app';
  message = 'fetch error';
  firstPlace = { lat: 41.3879, lon: 2.16992 };
  firstPlaceData: any = getRequest(this.firstPlace);
}
