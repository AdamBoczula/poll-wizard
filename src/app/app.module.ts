import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { ExampleComponent } from './components/example/example.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, environment.projectName),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    AuthModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
