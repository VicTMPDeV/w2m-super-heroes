import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Constants } from '@constants/constants';
import { SuperHero } from '@models/super-hero.interface';
import { environment } from '@environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http: HttpClient) { }

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.baseUrl}/${Constants.HEROES_ENDPOINT}`);
  }

  public getSuperHeroById( superHeroId: number): Observable<SuperHero> {
    return this.http.get<SuperHero>(`${environment.baseUrl}/${Constants.HEROES_ENDPOINT}/${superHeroId}`);
  }

  //TODO -> HACER CON LOS PARAMS DEL METODO COMO EN NASA APOD
  public findSuperHeroesByName( superHeroName: string ): Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>(`${environment.baseUrl}/${Constants.HEROES_ENDPOINT}/q=${superHeroName}`);
  }

  public createSuperHero ( newSuperHero: SuperHero ): Observable<SuperHero> {
    return this.http.post<SuperHero>(`${environment.baseUrl}/${Constants.HEROES_ENDPOINT}`, newSuperHero);
  }

  public updateSuperHero ( superHero: SuperHero ): Observable<SuperHero> {
    return this.http.put<SuperHero>(`${environment.baseUrl}/${Constants.HEROES_ENDPOINT}/${superHero.id}`, superHero);
  }

  public deleteSuperHero ( superHeroId: number ): Observable<SuperHero> {
    return this.http.delete<SuperHero>(`${environment.baseUrl}/${Constants.HEROES_ENDPOINT}/${superHeroId}`);
  }

}
