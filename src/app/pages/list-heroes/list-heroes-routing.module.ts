import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListHeroesComponent } from './list-heroes.component';

const routes: Routes = [
  {
    path:'', component: ListHeroesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListHeroesRoutingModule { }