import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { BuscarPasajeroComponent } from './buscar/buscar-pasajero.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'buscar',
        loadChildren: () =>
          import('./buscar/buscar.module').then(
            m => m.BuscarModule
          )
      },
      {
        path: 'listar',
        loadChildren: () =>
          import('./listar/listar.module').then(
            m => m.ListarModule
          )
      },
      {
        path: '**', redirectTo: ''
      }
    ])
  ]
})
export class AppRoutingModule { }