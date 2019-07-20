import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Trips from './pages/Trips'
import Trip from "./pages/Trip";
import Blog from "./pages/Blog";

const routes = [
    {route: '/', component: Home},
    {route: '/trips', component: Trips},
    {route: '/trips/:id', component: Trip},
    {route: '/blog', component: Blog}
];

export default function CustomRouter () {
    var allRoutes = routes.map((route, index) => <Route exact path={route.route} component={route.component} key={index}/>);
    return (
        <Switch>
            {allRoutes}
        </Switch>
    )
}
