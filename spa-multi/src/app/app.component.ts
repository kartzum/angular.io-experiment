import {Component, View, DynamicComponentLoader, ElementRef, OnInit} from 'angular2/core';
import {RouteConfig, RouteDefinition, Route} from 'angular2/router';

import {ROUTES} from './routes';

declare var System:any;

@Component({
    selector: 'app',
    template: ''
})
@RouteConfig(ROUTES)
export class AppComponent {
    constructor(
        private _dynamicComponentLoader: DynamicComponentLoader,
        private _elementRef: ElementRef
    ) {
    }

    ngOnInit() {
        System.import('app/shell.component').then(function(component) {
            this._dynamicComponentLoader.loadNextToLocation(component.default, this._elementRef);
        }.bind(this));
    }
}