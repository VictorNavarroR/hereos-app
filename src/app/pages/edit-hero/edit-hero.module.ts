import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHeroRoutingModule } from './edit-hero-routing.module';
import { EditHeroComponent } from './edit-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    EditHeroRoutingModule,
    SharedModule
  ]
})
export class EditHeroModule { }
