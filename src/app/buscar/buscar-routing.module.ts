import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuscarPasajeroComponent } from './buscar-pasajero.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'pasajeros',
        component: BuscarPasajeroComponent
      },
      {
        path: '',
        component: BuscarPasajeroComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class BuscarPasajeroRoutingModule { }