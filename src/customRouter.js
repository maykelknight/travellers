import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Trips from './pages/Trips'
import Trip from "./pages/Trip";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

const routes = [
    {route: '/', component: Home},
    {route: '/trips', component: Trips},
    {route: '/trips/:id', component: Trip},
    {route: '/blog', component: Blog},
    {route: '/blog/:id', component: Post}
];

export default function CustomRouter () {
    var allRoutes = routes.map((route, index) => <Route exact path={route.route} component={route.component} key={index}/>);
    return (
        <div className="main-content">
            <Switch>
                {allRoutes}
            </Switch>
        </div>

    )
}
