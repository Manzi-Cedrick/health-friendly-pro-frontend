import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AuthComponent } from './containers/auth/auth.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth',pathMatch: 'full'
  },
  {
   path: 'auth', component: AuthComponent 
  },
  {
  path: 'dashboard-page', component: DashboardComponent 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }