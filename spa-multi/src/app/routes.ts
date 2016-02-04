import {StartComponent} from './start.component';
import {AboutComponent} from './about.component';

export const ROUTES = [
    {path:'/', name: 'Root', component: StartComponent},
    {path:'/:page', name: 'Detail', component: StartComponent},
    {path:'/about', name: 'About', component: AboutComponent}
]