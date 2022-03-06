import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from 'src/app/shared/models/Hero.interface'
import { HeroService } from 'src/app/shared/hero.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  @Input() public hero?: Hero;
  public HeroForm?: FormGroup;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.HeroForm = new FormGroup({
      human_name: new FormControl(this.hero?.human_name || '', Validators.required),
      history: new FormControl(this.hero?.history || '', Validators.required),
      hero_name: new FormControl(this.hero?.hero_name || '', Validators.required),
      image: new FormControl(this.hero?.image || '', Validators.required),
      featured: new FormControl(this.hero?.featured || false),
    });
  }


  public saveHero(event: Event) {
    event.preventDefault();
    if (this.HeroForm?.valid) {
      // Añadir condición de que si el producto introducido por input está definido se edite el producto si no
      // que se cree.
      let productRequest;
      if (this.hero?.id) {
        productRequest = this.heroService.editHero(this.hero.id, this.HeroForm.value);
      } else {
        productRequest = this.heroService.createHero(this.HeroForm.value);
      }
      productRequest.subscribe(() => {
        this.router.navigate(['/hero-list']);
      });
      this.HeroForm.reset();
    }
  }

}


