import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [DashboardIndexComponent, DashboardWidgetComponent],
  imports: [
    CommonModule, NgCircleProgressModule.forRoot({})
  ],
  exports: [
    DashboardIndexComponent
  ]
})
export class DashboardModule { }
