import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutDashboardComponent } from './about-dashboard/about-dashboard.component';


@NgModule({
  declarations: [
    AboutDashboardComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
