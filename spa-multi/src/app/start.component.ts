import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Block} from './block';
import {BlockService} from './block.service';
import {PageDescriptor} from './page-descriptor';
import {PageNavigationComponent} from './page-navigation.component';

@Component({
    templateUrl: 'app/start.html',
    directives: [PageNavigationComponent]
})
export class StartComponent {
    blocks: Block[];
    pageDescriptors: PageDescriptor[];

    constructor(
        private _blockService:BlockService,
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        this._blockService.getBlocks(this._getPage()).then(result => {
            this.blocks = result.blocks;
            this.pageDescriptors = [];
            for(var i = 0; i < result.pages; i++) {
                this.pageDescriptors.push(new PageDescriptor((i+1).toString(), '/'+i));
            }
        });
    }

    private _getPage():number {
        var page = this._routeParams.get('page');
        if(page == null) {
            page = 0;
        }
        return page;
    }
}