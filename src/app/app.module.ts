import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireModule} from '@angular/fire';

import {AppRoutingModule} from './app-routing.module';
import {AppUiModule} from './app-ui/app-ui.module';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUiModule,
    AngularFireModule.initializeApp(environment.firebase, 'poll-wizard'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
