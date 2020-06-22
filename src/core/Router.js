import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";


const routesList = [];


const Routes = () => {
    const routes = routesList.map((route, index) => {
        return (
            <Route path={route.path} component={route.component} key={index} exact={true}></Route>
        );
    })

    return (
        <Router>
            <Switch>
            {routes}
            </Switch>
        </Router>
    );
};

export function addRoute(path, component) {
    routesList.push({path, component});
}

export function scan() {
    ReactDOM.render(<Routes />, document.getElementById('root'));    
}