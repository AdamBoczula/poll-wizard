import {Component} from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = R.toUpper('poll-wizard');
}
