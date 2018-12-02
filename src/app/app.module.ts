import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppUiModule} from './app-ui/app-ui.module';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';

import {environment} from '../environments/environment';
import {reducers, metaReducers} from './reducers';
import { ExampleComponent } from './components/example/example.component';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUiModule,
    AngularFireModule.initializeApp(environment.firebase, environment.projectName),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    AuthModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
