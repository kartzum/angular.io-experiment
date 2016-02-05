import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'shell-component',
    templateUrl: 'app/shell.html',
    directives: [ROUTER_DIRECTIVES]
})
export default class ShellComponent { }