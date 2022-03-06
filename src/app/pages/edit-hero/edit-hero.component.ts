import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/shared/models/Hero.interface';
import { HeroService } from 'src/app/shared/hero.service'

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const heroId = params["id"];
      this.heroService.getHeroById(heroId).subscribe((hero) => {
        this.hero = hero;
      });
    });
  }

}
