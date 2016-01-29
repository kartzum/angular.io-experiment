import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {StartComponent} from './start.component';
import {AboutComponent} from './about.component';

@Component({
    selector: 'app',
    template: `
    <h1>App</h1>
    <nav>
      <a [routerLink]="['Start']">Start</a>
      <a [routerLink]="['About']">About</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/start', name: 'Start', component: StartComponent},
    {path:'/about', name: 'About', component: AboutComponent}
])
export class AppComponent { }