/// <reference path="../typings/d3/d3.d.ts"/>

import {Component, OnInit} from 'angular2/core';
import {DataService} from './data.service'

@Component({
    selector: 'app',
    template: `
    <h1>App</h1>
    `,
    providers:[DataService]
})
export class AppComponent implements OnInit {

    constructor(private _dataService:DataService) {
    }

    ngOnInit(): any {
        this._dataService.load().then(value => {
            var force = d3.layout.force()
                .charge(-120)
                .linkDistance(30)
                .size([500, 500]);

            var svg = d3.select("body").append("svg")
                .attr("width", 500)
                .attr("height", 500);

            force
                .nodes(value.nodes)
                .links(value.links)
                .start();

            var node = svg.selectAll(".node")
                .data(value.nodes)
                .enter().append("circle")
                .attr("class", "node")
                .attr("r", 5);

            var link = svg.selectAll(".link")
                .data(value.links)
                .enter().append("line")
                .attr("class", "link")
                .style("stroke-width", function(d) { return Math.sqrt(d.value); });

            force.on("tick", function() {
                link.attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                node.attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });
            });
        });
    }
}