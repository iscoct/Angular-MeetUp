import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListarPasajerosComponent } from './listar-pasajeros.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'pasajeros',
        component: ListarPasajerosComponent
      },
      {
        path: '',
        component: ListarPasajerosComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ListarPasajerosRoutingModule { }