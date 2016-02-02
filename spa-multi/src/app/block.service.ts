import {Injectable} from 'angular2/core';

import {Block} from './block';

@Injectable()
export class BlockService {
    private _blocks;

    constructor() {
        var blocks = [
            new Block('1', 'Block 1'),
            new Block('2', 'Block 2'),
            new Block('3', 'Block 3')
        ];
        this._blocks = Promise.resolve(blocks);
    }

    getBlocks() {
        return this._blocks;
    }
}