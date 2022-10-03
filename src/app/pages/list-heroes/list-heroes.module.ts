import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ListHeroesComponent } from './list-heroes.component';
import { ListHeroesRoutingModule } from './list-heroes-routing.module';


@NgModule({
  declarations: [
    ListHeroesComponent
  ],
  imports: [
    CommonModule,
    ListHeroesRoutingModule,
    FlexLayoutModule  
  ]
})
export class ListHeroesModule { }
