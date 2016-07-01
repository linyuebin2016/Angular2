import {Injectable } from '@angular/core';

import { Hero } from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export /**
 * HeroService
 */
    class HeroService {
    constructor() {

    }

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
}