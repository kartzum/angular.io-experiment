import {Component} from 'angular2/core';

import {PageDescriptor} from './page-descriptor';

@Component({
    selector: 'page-navigation',
    template: `
        <table>
            <tbody>
                <tr>
                    <td *ngFor="#pageDescriptor of pageDescriptors"><a href="{{pageDescriptor.url}}">{{pageDescriptor.title}}</a></td>
                </tr>
            </tbody>
        </table>
    `,
    inputs: ['pageDescriptors']
})
export class PageNavigationComponent {
    public pageDescriptors:PageDescriptor[];
}