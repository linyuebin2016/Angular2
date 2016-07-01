import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
template: `
  <h1>{{title}}</h1>
 <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}

@RouteConfig([
  {
 path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
  },
  {
        path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
  }
])