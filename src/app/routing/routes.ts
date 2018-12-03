import {Routes} from '@angular/router';
import {ExampleComponent} from '../components/example/example.component';
import {AuthGuard} from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
