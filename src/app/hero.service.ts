import { Injectable } from '@angular/core';
//Importing heros for display
import { HEROES } from './mock-heroes';
//Importing Hero for selectedHero
import { Hero } from './hero';

import { Observable, of } from 'rxjs';
//importing MessageService
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
  })

  export class HeroService {
    constructor(private messageService: MessageService) {}

       getHeroes(): Observable<Hero[]> {
         this.messageService.add('HeroService: Fetched Hereos');
        return of(HEROES);
      }

      getHero(id: number): Observable<Hero> {
      //displaying with template binding
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
      }
}
