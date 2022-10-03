import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { SuperHeroService } from '@services/super-hero.service';
import { SuperHero } from '@models/super-hero.interface';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {

  public heroesList: SuperHero[] = []; 

  constructor(private _sHService: SuperHeroService) { }

  ngOnInit(): void {
    this._sHService.getSuperHeroes()
      .subscribe({
        next: (response: SuperHero[]) => {
          this.heroesList = response;
        },
        error: (errorResponse: HttpErrorResponse) => {
          //TODO -> CREAR SERVICIO DE NAVEGACION O USAR ROUTER PARA LLEVAR A LA PAGINA DE ERROR (p.ej. SERVIDOR NO LEVANTADO)
        }
      })
  }

}
