import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardHeroModule } from '@components/card-hero/card-hero.module';
import { SpinnerModule } from '@components/spinner/spinner.module';

import { ListHeroesComponent } from './list-heroes.component';
import { ListHeroesRoutingModule } from './list-heroes-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListHeroesComponent
  ],
  imports: [
    CommonModule,
    ListHeroesRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    CardHeroModule,
    SpinnerModule  
  ]
})
export class ListHeroesModule { }
