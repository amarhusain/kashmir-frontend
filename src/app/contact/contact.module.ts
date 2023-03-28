import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';


@NgModule({
  declarations: [
    ContactDashboardComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
