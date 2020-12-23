import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { Routes, RouterModule } from '@angular/router';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [ DashboardComponent ,
                  SearchPipe
              ],
  imports: [
    CommonModule,
    FusionChartsModule,
    RouterModule.forChild(dashboardRoutes),
    FormsModule
  ],
})
export class DashboardModule { }
