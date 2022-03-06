import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero.interface'
import { HeroService } from 'src/app/shared/hero.service'
import { PageEvent } from '@angular/material/paginator'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  public allHeroes: Hero[] = []
  public filterHero: string = ''
  public heroSlice:Hero[] = []
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHeroes()

  }

  public getHeroes() {
    this.route.params.subscribe((params) => {
      const heroName = params["hero"];
      if(heroName) {
        this.heroService.getHeroByName(heroName).subscribe((hero) => {
          this.heroSlice = hero
        });
      } else {
        this.heroService.getAllHeroes().subscribe((heroes) => {
          this.allHeroes = heroes
          this.heroSlice = this.allHeroes.slice(0, 4)
        })
      }

    });


  }

  public deleteHeroInParent(id: string) {
    this.heroService.deleteHero(id).subscribe(() => {
      this.getHeroes();
    });
  }

  public OnPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize

    if( endIndex > this.allHeroes.length ) {
      endIndex = this.allHeroes.length
    }

    this.heroSlice = this.allHeroes.slice(startIndex, endIndex)

  }

}
