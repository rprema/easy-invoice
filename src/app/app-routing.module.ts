import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {InvoicesComponent} from './pages/invoices/invoices.component';
import {ClientsComponent} from './pages/clients/clients.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {InvoiceFormComponent} from './pages/invoice-form/invoice-form.component';
import {ClientFormComponent} from './pages/client-form/client-form.component';
import {ResetPasswordComponent} from './pages/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'invoices/:itemId',
    component: InvoiceFormComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'clients/:itemId',
    component: ClientFormComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
