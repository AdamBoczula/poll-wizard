import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  StoreRouterConnectingModule,
  routerReducer,
  StoreRouterConfig,
  NavigationActionTiming
} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';

import {CustomRouteSerializer} from './custom-route-serializer';
import {routes} from './routes';

@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(<StoreRouterConfig>{
      stateKey: 'router',
      serializer: CustomRouteSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
