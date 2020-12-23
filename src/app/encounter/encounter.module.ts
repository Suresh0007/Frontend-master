import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncounterComponent } from './encounter.component';


const encounter: Routes = [
  { path: '', component: EncounterComponent }
  ];

@NgModule({
  declarations: [EncounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(encounter),
  ],
  exports: [EncounterComponent]
})
export class EncounterModule { }
