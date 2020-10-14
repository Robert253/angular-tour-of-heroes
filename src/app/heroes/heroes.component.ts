import { Component, OnInit } from '@angular/core';
//Importing heros for display
import { HEROES } from '../mock-heroes';
//Importing Hero for selectedHero
import { Hero } from '../hero';

//Importing Service when created in Cli
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  //displaying heros in array... importing from mock-heroes.ts file
  heroes: Hero[];

  //injecting HeroService in constructor
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    //Listens for Observable to admit array of heros
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes)
      );
  }

}
