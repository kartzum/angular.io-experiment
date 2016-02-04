import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Block} from './block';
import {BlockService} from './block.service';

@Component({
    templateUrl: 'app/start.html'
})
export class StartComponent {
    blocks: Block[];

    constructor(
        private _blockService:BlockService,
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        this._blockService.getBlocks(this._getPage()).then(blocks => this.blocks = blocks);
    }

    private _getPage():number {
        var page = this._routeParams.get('page');
        if(page == null) {
            page = 0;
        }
        return page;
    }
}