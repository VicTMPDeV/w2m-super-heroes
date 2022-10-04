import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('@pages/list-heroes/list-heroes.module').then(mod => mod.ListHeroesModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '', 
    redirectTo: 'heroes', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
