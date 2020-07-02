import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      }
    ])
  ]
})
export class AppRoutingModule { }