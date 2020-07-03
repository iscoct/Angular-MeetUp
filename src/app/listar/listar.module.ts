import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListarPasajerosComponent } from './listar-pasajeros.component';
import { ListarPasajerosRoutingModule } from './listar-routing.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    NgbModule,
    ListarPasajerosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ ListarPasajerosComponent ]
})
export class ListarModule { }
