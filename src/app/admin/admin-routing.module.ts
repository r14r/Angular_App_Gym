import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { PacksComponent } from './packs/packs.component';
import { CanDeactivateClient } from './client-add/can-deactivate-client.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', redirectTo: 'addClient', pathMatch: 'full'},
      {path: 'addClient', component: ClientAddComponent, canDeactivate: [CanDeactivateClient]},
      {path: 'packs', component: PacksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
