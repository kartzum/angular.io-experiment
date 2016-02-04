import {Injectable} from 'angular2/core';

import {Block} from './block';

@Injectable()
export class BlockService {
    private _blocks;
    private _count: number;

    constructor() {
        this._blocks = [
            new Block('1', 'Block 1'),
            new Block('2', 'Block 2'),
            new Block('3', 'Block 3'),
            new Block('4', 'Block 4'),
            new Block('5', 'Block 5'),
            new Block('6', 'Block 6'),
            new Block('7', 'Block 7'),
            new Block('8', 'Block 8'),
            new Block('9', 'Block 9'),
            new Block('10', 'Block 10'),
            new Block('11', 'Block 11'),
            new Block('12', 'Block 12')
        ];

        this._count = 5;
    }

    getBlocks(page: number) {
        var start = this._count * page;
        var result = [];
        var size = this._blocks.length;
        for(var i = start; i < start + this._count; i++) {
            if(i < size) {
                result.push(this._blocks[i]);
            }
        }
        var pages = size / this._count;
        return Promise.resolve({blocks:result, pages: pages});
    }
}