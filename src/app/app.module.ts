import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaerialModule } from './shared/modules/angular-maerial/angular-maerial.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { OutletComponent } from './outlet/outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    OutletComponent,
    // GmapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaerialModule, RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      // { path: 'register', component: Regis },
      { path: 'login', component: LoginComponent },
       
     
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
