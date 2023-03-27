import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaftanDashboardComponent } from './kaftan-dashboard/kaftan-dashboard.component';
import { KaftanRoutingModule } from './kaftan-routing.module';
import { ItemCardComponent } from './item-card/item-card.component';



@NgModule({
  declarations: [
    KaftanDashboardComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    KaftanRoutingModule
  ]
})
export class KaftanModule { }
