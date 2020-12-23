import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ConsoleComponent } from '../console/console/console.component';
import { SideNavBarModule } from '../side-navbar/side-navbar.module';
import { HeaderComponent } from '../header/header.component';
import { AuthGuard } from '../_services/auth.guard';

const consoleRoutes: Routes = [
  {
    path: '', component: ConsoleComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // tslint:disable-next-line:max-line-length
      { path: 'dashboard' , loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]},
      // tslint:disable-next-line:max-line-length
      { path: 'console/production', loadChildren: () => import('../production-account/production-account.module').then(m => m.ProductionAccountModule), canActivate: [AuthGuard]},
      // tslint:disable-next-line:max-line-length
      { path: 'console/encounter', loadChildren: () => import('../encounter/encounter.module').then(m => m.EncounterModule), canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  declarations: [
    ConsoleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(consoleRoutes),
    SideNavBarModule,
  ]
})
export class ConsoleModule { }
