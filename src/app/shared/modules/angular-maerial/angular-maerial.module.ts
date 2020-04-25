import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const MAT_MODULE = [
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MAT_MODULE
  ],
  exports: [
    ...MAT_MODULE
  ]

})
export class AngularMaerialModule { 
//  static forchild(): ModuleWithProviders {
//     return{
//       ngModule:AngularMaerialModule,

//       providers: []
//     };
//  }
}
