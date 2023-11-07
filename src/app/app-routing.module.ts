import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AuthComponent } from './containers/auth/auth.component';
import { PatientComponent } from './containers/patient/patient.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth',pathMatch: 'full'
  },
  {
   path: 'auth', component: AuthComponent 
  },
  {
  path: 'dashboard-page', component: DashboardComponent 
  },
  {
    path: 'patient-page', component: PatientComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }