import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';

const routes: Routes = [
  {path: '', component: ContactDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
