import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component'
import {applyTemplateUrl} from './dynamic-resources';

applyTemplateUrl(AppComponent, 'app/app.html');

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);