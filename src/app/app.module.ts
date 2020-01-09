import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InvoicesComponent} from './pages/invoices/invoices.component';
import {ClientsComponent} from './pages/clients/clients.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {InvoiceFormComponent} from './pages/invoice-form/invoice-form.component';
import {InvoiceFormSettingsComponent} from './components/invoice-form-settings/invoice-form-settings.component';
import {MenuComponent} from './components/menu/menu.component';
import {HeaderComponent} from './components/header/header.component';
import {LogoComponent} from './components/logo/logo.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    ClientsComponent,
    SettingsComponent,
    InvoiceFormComponent,
    InvoiceFormSettingsComponent,
    MenuComponent,
    HeaderComponent,
    LogoComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
