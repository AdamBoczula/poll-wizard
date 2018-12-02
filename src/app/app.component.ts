import {Component} from '@angular/core';
import * as R from 'ramda';
import {RoutePaths} from './routing/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = R.toUpper('poll-wizard');
  routePaths = RoutePaths;

  constructor() {
  }
}
