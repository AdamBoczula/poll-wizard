import { Routes } from '@angular/router';
import { ExampleComponent } from '../components/example/example.component';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from '../auth/components/login/login.component';

export const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
