import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'hero-list',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/hero-list/hero-list.module').then(m => m.HeroListModule)
  },
  {
    path: 'hero-list/:hero',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/hero-list/hero-list.module').then(m => m.HeroListModule)
  },
  {
    path: 'add-hero',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/add-hero/add-hero.module').then(m => m.AddHeroModule)
  },
  {
    path: 'edit-hero/:id',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/edit-hero/edit-hero.module').then(m => m.EditHeroModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
