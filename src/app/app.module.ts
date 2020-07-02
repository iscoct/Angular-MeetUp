import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscarPasajeroInterceptorService } from './buscar/buscar-pasajero.interceptor';

import { WelcomeComponent } from './home/welcome.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, WelcomeComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BuscarPasajeroInterceptorService,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
