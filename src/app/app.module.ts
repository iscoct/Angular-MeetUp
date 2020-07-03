import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscarPasajeroInterceptorService } from './buscar/buscar-pasajero.interceptor';
import { SharedModule } from './shared/shared.module';

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
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
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
