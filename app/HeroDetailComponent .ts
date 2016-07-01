import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    let id = +this.routeParams.get('id');
}
