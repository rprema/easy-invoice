import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {InvoicesComponent} from './pages/invoices/invoices.component';
import {ClientsComponent} from './pages/clients/clients.component';
import {SettingsComponent} from './pages/settings/settings.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'invoices', component: InvoicesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
