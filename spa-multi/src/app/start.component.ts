import {Component, OnInit} from 'angular2/core';

import {Block} from './block';
import {BlockService} from './block.service';

@Component({
    templateUrl: 'app/start.html'
})
export class StartComponent {
    blocks: Block[];

    constructor(private _blockService:BlockService) {
    }

    ngOnInit() {
        this._blockService.getBlocks().then(blocks => this.blocks = blocks);
    }
}