import React from 'react';
import { ReactorComponent } from '../../../core/ReactorComponent';
import { RouteWithSubRoutes } from '../../../core/Router';
import { Switch } from 'react-router-dom';

export default class Content extends ReactorComponent {

    render() {
        return (
            <Switch>
                {this.props.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        )
    }

}