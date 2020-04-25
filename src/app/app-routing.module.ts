import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'dashbord', loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule) },
  { path: 'schools', loadChildren: () => import('./schools/schools.module').then(m => m.SchoolsModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
    { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
     { path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
