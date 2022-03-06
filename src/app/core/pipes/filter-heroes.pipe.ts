import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero.interface'

@Pipe({
  name: 'filterHeroes'
})
export class FilterHeroesPipe implements PipeTransform {

  transform(heroes: Hero[], filterHero: string): Hero[] {
    return heroes.filter(value => value.hero_name.toLowerCase().includes(filterHero.toLowerCase()))
  }

}
