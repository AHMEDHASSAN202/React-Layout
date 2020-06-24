import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";


const routesList = [];

const Routes = () => {
    const routes = routesList.map((route, index) => {
        return <Route path={route.path} component={route.component} key={index} exact={route.exact}></Route>;
    })

    return (
        <Router>
            { routes }
        </Router>
    );
};

export function addRoute(route) {
    routesList.push(route);
}

export function scan() {
    ReactDOM.render(<Routes />, document.getElementById('root'));    
}