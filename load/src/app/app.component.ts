import {Component, OnInit} from 'angular2/core';
import {DataService} from './data.service'

@Component({
    selector: 'app',
    template: `
    <h1>App</h1>
    <ul>
      <li *ngFor="#d of data">
        {{ d }}
      </li>
    </ul>
    `,
    providers:[DataService]
})
export class AppComponent implements OnInit {
    private data:any;

    constructor(private _dataService:DataService) {
    }

    ngOnInit(): any {
        this._dataService.load().then(value => this.data = value);
    }
}