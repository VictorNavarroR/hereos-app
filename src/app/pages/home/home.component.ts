import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero.interface'
import { HeroService } from 'src/app/shared/hero.service'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public featuredHeroes: Hero[] = []

  constructor(
    private heroService: HeroService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getHomeHeroes()
  }

  public getHomeHeroes() {
    this.heroService.getFeaturedHeroes().subscribe((heroes) => {
      this.featuredHeroes = heroes
    })
  }

  public deleteHeroInParent(id: string) {
    this.heroService.deleteHero(id).subscribe((res) => {
      this.getHomeHeroes();
    });
  }

}
