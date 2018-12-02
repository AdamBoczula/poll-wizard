import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {NavigationActionTiming, routerReducer, StoreRouterConfig, StoreRouterConnectingModule} from '@ngrx/router-store';

import {routes} from './routes';
import {CustomRouteSerializer} from './custom-route-serializer';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forFeature('router', routerReducer),
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
