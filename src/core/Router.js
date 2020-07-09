import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";


const routesList = [];

const Routes = () => {
    return (
        <Router>
            <Switch>
                {routesList.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    );
};

export function addRoute(route) {
    routesList.push(route);
}

export function scan() {
    ReactDOM.render(<Routes />, document.getElementById('root'));    
}

export function RouteWithSubRoutes({path, component, routes = [], exact = false}) {
    const MainComponent = component;
    return (
        <Route
          path={path}
          exact={exact}
          render={props => (
            // pass the sub-routes down to keep nesting
            <MainComponent {...props} routes={routes} />
          )}
        />
    );
}