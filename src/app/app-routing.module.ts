import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/auth.guard.service';
import { OutletComponent } from './outlet/outlet.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/dashbord'},
  {

    path: '',
    component: OutletComponent,
    canActivate: [AuthGuardService],
    children: [

      { path: 'dashbord', loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule) },
      { path: 'schools', loadChildren: () => import('./schools/schools.module').then(m => m.SchoolsModule) },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
      { path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) },
    
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
