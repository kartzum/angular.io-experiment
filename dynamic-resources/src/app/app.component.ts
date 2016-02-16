import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {loadComponent} from './dynamic-resources';

@Component({
    selector: 'app',
    templateUrl: '',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/start', name: 'Start', loader: () => loadComponent('app/start.component', 'app/themes/default/templates/start.html')},
    {path:'/help', name: 'Help', loader: () => loadComponent('app/help.component', 'app/themes/default/templates/help.html')},
    {path:'/about', name: 'About', loader: () => loadComponent('app/about.component', 'app/themes/default/templates/about.html')}
])
export class AppComponent {}