import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'

import { ListarPasajerosComponent } from './listar-pasajeros.component';
import { ListarPasajerosRoutingModule } from './listar-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    ListarPasajerosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ ListarPasajerosComponent ]
})
export class ListarModule { }
