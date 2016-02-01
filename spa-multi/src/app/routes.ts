import {StartComponent} from './start.component';
import {AboutComponent} from './about.component';

export const ROUTES = [
    {path:'/', name: 'Start', component: StartComponent},
    {path:'/about', name: 'About', component: AboutComponent}
]