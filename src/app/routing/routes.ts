import {Routes} from '@angular/router';
import {ExampleComponent} from '../components/example/example.component';

export enum RoutePaths {
  ExamplePage = 'example'
}

export const routes: Routes = [
  {
    path: RoutePaths.ExamplePage,
    component: ExampleComponent
  }
];
