import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { AuthComponent } from './containers/auth/auth.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideboxComponent } from './shared/sidebox/sidebox.component';
import { PatientComponent } from './containers/patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AuthComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    SideboxComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
