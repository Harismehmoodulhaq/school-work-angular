import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsComponent } from './schools.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';

const routes: Routes = [
  { path: '', component: SchoolsComponent },
  { path: ':id', component: SchoolDetailsComponent }, 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
