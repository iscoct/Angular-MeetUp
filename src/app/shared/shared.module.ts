import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InformacionPasajerosComponent } from './informacion-pasajeros.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    NgbModule
  ],
  declarations: [ InformacionPasajerosComponent ],
  exports: [ InformacionPasajerosComponent ]
})
export class SharedModule { }
