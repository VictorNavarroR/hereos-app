import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hero } from 'src/app/shared/models/Hero.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllHeroes(): Observable<Hero[]> {
    return (this.http.get(`${environment.heroApiUrl}heroes`) as Observable<Hero[]>)
   }

  public getFeaturedHeroes(): Observable<Hero[]> {
    return (this.http.get(`${environment.heroApiUrl}heroes`) as Observable<Hero[]>)
      .pipe(
        map(( heroes ) => {
            return heroes.filter( hero => hero.featured === true) 
        }),
      )
   }

  public getHeroById(id: string): Observable<Hero> {
    return (this.http.get(`${environment.heroApiUrl}heroes/${id}`) as Observable<Hero>)
  }

  public getHeroByName(hero_name: string): Observable<Hero[]> {
    return (this.http.get(`${environment.heroApiUrl}heroes/?hero_name_like=${hero_name}`) as Observable<Hero[]>)
  }

  public createHero(hero: Hero): Observable<Hero> {
    return this.http.post(`${environment.heroApiUrl}heroes`, hero) as Observable<Hero>;
  }


  public editHero(id: string, hero: Hero) {
    return this.http.put(`${environment.heroApiUrl}heroes/${id}`, hero) as Observable<Hero>;
  }

  public deleteHero(id: string): Observable<Hero> {
    return this.http.delete(`${environment.heroApiUrl}heroes/${id}`) as Observable<Hero>;
  }


}
