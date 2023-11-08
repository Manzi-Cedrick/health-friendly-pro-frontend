import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './containers/auth/auth.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideboxComponent } from './shared/sidebox/sidebox.component';
import { TablePatientComponent } from './shared/table-patient/table-patient.component';
import { InfoDrawerComponent } from './shared/info-drawer/info-drawer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    SideboxComponent,
    TablePatientComponent,
    InfoDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
