import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListHeroesComponent } from './list-heroes.component';

const routes: Routes = [
  {
    path: '', component: ListHeroesComponent,
  },
  {
    path: 'add',
    // loadChildren: () => import().then(mod => mod.)
  },
  {
    path: 'edit/:id',
    // loadChildren: () => import().then(mod => mod.)
  },
  { 
    path: '**', redirectTo: '', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListHeroesRoutingModule { }