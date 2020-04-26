import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { AngularMaerialModule } from '../shared/modules/angular-maerial/angular-maerial.module';
import { GmapComponent } from '../shared/components/gmap/gmap.component';


@NgModule({
  declarations: [
    DashbordComponent,
    GmapComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    AngularMaerialModule
  ]
})
export class DashbordModule { }
