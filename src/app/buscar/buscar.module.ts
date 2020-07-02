import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'

import { BuscarPasajeroComponent } from './buscar-pasajero.component';
import { BuscarPasajeroRoutingModule } from './buscar-routing.module';
import { BuscarPasajeroService } from './buscar.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    BuscarPasajeroRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ BuscarPasajeroComponent ],
  providers: [
    BuscarPasajeroService
  ]
})
export class BuscarModule { }
