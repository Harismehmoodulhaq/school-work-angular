import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LoginPageGuard } from '../shared/services/login-page.guard';


export const DECLARATIONS = [
  LoginComponent,
  AuthComponent,
]

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', canActivate:[LoginPageGuard] , component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
