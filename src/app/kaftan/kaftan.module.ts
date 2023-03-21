import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaftanDashboardComponent } from './kaftan-dashboard/kaftan-dashboard.component';
import { KaftanRoutingModule } from './kaftan-routing.module';



@NgModule({
  declarations: [
    KaftanDashboardComponent
  ],
  imports: [
    CommonModule,
    KaftanRoutingModule
  ]
})
export class KaftanModule { }
