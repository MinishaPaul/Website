import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { } 