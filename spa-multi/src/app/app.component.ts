import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {StartComponent} from './start.component';
import {AboutComponent} from './about.component';

import {ShellComponent} from './shell.component'

@Component({
    selector: 'app',
    template: ''
})
@RouteConfig([
    {path:'/', name: 'Start', component: StartComponent},
    {path:'/about', name: 'About', component: AboutComponent}
])
export class AppComponent {
    constructor(dynamicComponentLoader: DynamicComponentLoader, elementRef: ElementRef) {
        dynamicComponentLoader.loadNextToLocation(ShellComponent, elementRef);
    }
}