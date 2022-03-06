import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListRoutingModule } from './hero-list-routing.module';
import { HeroListComponent } from './hero-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterHeroesPipe } from 'src/app/core/pipes/filter-heroes.pipe';
import { FormsModule } from '@angular/forms';

import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    HeroListComponent,
    FilterHeroesPipe
  ],
  imports: [
    CommonModule,
    HeroListRoutingModule,
    SharedModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class HeroListModule { }
