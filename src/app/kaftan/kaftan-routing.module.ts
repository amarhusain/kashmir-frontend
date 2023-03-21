import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaftanDashboardComponent } from './kaftan-dashboard/kaftan-dashboard.component';

const routes: Routes = [
  { path: '', component: KaftanDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaftanRoutingModule { }
