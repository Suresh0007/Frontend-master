import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionAccountComponent } from './production-account.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const production: Routes = [
  { path: '', component: ProductionAccountComponent }
  ];

@NgModule({
  declarations: [ProductionAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(production),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ProductionAccountComponent]
})
export class ProductionAccountModule { }
