import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaerialModule } from './shared/modules/angular-maerial/angular-maerial.module';
import { GmapComponent } from './shared/components/gmap/gmap.component';
@NgModule({
  declarations: [
    AppComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    AngularMaerialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
