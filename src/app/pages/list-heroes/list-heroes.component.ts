import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { SuperHeroService } from '@services/api-service/super-hero.service';
import { NavigationService } from '@services/navigation-service/navigation.service';
import { SuperHero } from '@models/super-hero.interface';
import { Constants } from '@constants/constants';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {

  public heroesList: SuperHero[] = []; 

  constructor(private _sHService: SuperHeroService,
              private _navService: NavigationService) { }

  ngOnInit(): void {
    this._sHService.getSuperHeroes()
      .subscribe({
        next: (response: SuperHero[]) => {
          this.heroesList = response;
        },
        //TODO -> controlar error desde el servicio también para que no logue 2 veces en consola
        error: (errorResponse: HttpErrorResponse) => {
          console.error(Constants.ERROR, errorResponse.message);
          this._navService.goToErrorPage();
        }
      })
  }

}
