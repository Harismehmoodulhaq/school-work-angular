import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaerialModule } from './shared/modules/angular-maerial/angular-maerial.module';
import { OutletComponent } from './outlet/outlet.component';
import { HttpClientModule } from '@angular/common/http';
import { SchoolCardComponent } from './shared/components/school-card/school-card.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
// import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    OutletComponent,
    SchoolCardComponent,
    NotFoundComponent,
    // CardComponent,
    // GmapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaerialModule,
    HttpClientModule
       
     
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
