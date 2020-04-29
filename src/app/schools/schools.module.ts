import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { AngularMaerialModule } from '../shared/modules/angular-maerial/angular-maerial.module';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { CardComponent } from '../shared/components/card/card.component';


@NgModule({
  declarations: [
    SchoolsComponent, 
    SchoolDetailsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    AngularMaerialModule
  ]
})
export class SchoolsModule { }
