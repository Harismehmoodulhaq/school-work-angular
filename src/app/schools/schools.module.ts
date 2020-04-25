import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { AngularMaerialModule } from '../shared/modules/angular-maerial/angular-maerial.module';


@NgModule({
  declarations: [SchoolsComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    AngularMaerialModule
  ]
})
export class SchoolsModule { }
