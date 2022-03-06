import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent
  },
  {
    path: ':name',
    component: HeroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroListRoutingModule { }
