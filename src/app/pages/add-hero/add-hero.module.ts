import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHeroRoutingModule } from './add-hero-routing.module';
import { AddHeroComponent } from './add-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    AddHeroRoutingModule,
    SharedModule
  ]
})
export class AddHeroModule { }
