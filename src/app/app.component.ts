import { Component } from '@angular/core';
import { getRequest } from 'src/utils/getRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Weather app';
  place = { lat: 41.3879, lon: 2.16992 };
  data: any = getRequest(this.place);
}
