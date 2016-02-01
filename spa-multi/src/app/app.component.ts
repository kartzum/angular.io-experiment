import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {RouteConfig, RouteDefinition, Route} from 'angular2/router';

import {ShellComponent} from './shell.component'
import {ROUTES} from './routes';

@Component({
    selector: 'app',
    template: ''
})
@RouteConfig(ROUTES)
export class AppComponent {
    constructor(
        dynamicComponentLoader: DynamicComponentLoader,
        elementRef: ElementRef
    ) {
        dynamicComponentLoader.loadNextToLocation(ShellComponent, elementRef);
    }
}