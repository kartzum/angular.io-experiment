import {Component, ViewMetadata, ComponentMetadata} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {reflector, ReflectionInfo} from 'angular2/src/core/reflection/reflection';

declare var System:any;

function loadComponent(url, templateUrl) {
    return System.import(url).then(function(m) {
        var component = m.default;

        var compMeta: ComponentMetadata;
        var viewMeta: ViewMetadata;

        reflector.annotations(component).forEach(m => {
            if (m instanceof ViewMetadata) {
                viewMeta = m;
            }
            if (m instanceof ComponentMetadata) {
                compMeta = m;
            }
        });

        if(compMeta != null) {
            compMeta.templateUrl = templateUrl;
        } else if(viewMeta != null) {
            viewMeta.templateUrl = templateUrl;
        }

        return component;
    });
}

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
    {path:'/start', name: 'Start', loader: () => loadComponent('app/start.component', 'app/themes/default/templates/start.html')},
    {path:'/about', name: 'About', loader: () => loadComponent('app/about.component', 'app/themes/default/templates/about.html')}
])
export class AppComponent {}