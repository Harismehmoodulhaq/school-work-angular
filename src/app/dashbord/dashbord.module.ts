import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { AngularMaerialModule } from '../shared/modules/angular-maerial/angular-maerial.module';


@NgModule({
  declarations: [DashbordComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    AngularMaerialModule
  ]
})
export class DashbordModule { }
