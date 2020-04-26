import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule, DECLARATIONS } from './auth-routing.module';
import { AngularMaerialModule } from '../shared/modules/angular-maerial/angular-maerial.module';





@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    AngularMaerialModule,
    AuthRoutingModule,


  ]
})
export class AuthModule { }
