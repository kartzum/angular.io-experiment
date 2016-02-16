import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";

import {AppComponent} from "./app.component";
import {applyTemplateUrl, applyRouteConfig} from "./dynamic-resources";

applyTemplateUrl(AppComponent, 'app/themes/default/templates/app.html');
applyRouteConfig(AppComponent, [
    {
        path: '/start',
        name: 'Start',
        componentPath: 'app/start.component',
        templatePath: 'app/themes/default/templates/start.html'
    },
    {
        path: '/about',
        name: 'About',
        componentPath: 'app/about.component',
        templatePath: 'app/themes/default/templates/about.html'
    },
    {
        path: '/help',
        name: 'Help',
        componentPath: 'app/help.component',
        templatePath: 'app/themes/default/templates/help.html'
    }
]);

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);