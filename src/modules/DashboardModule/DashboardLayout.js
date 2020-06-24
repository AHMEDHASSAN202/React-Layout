import React from 'react'
import { ReactorComponent } from '../../core/ReactorComponent';
import Layout from '../../shared/Components/layouts/admin-layout/layout';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import TestPage from './Pages/TestPage';


export default class DashboardLayout extends ReactorComponent {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/admin/test" component={TestPage} exact={true}/> 
                    <Route path="/admin" component={DashboardPage} exact={true}/>               
                </Switch>
            </Layout>
        );
    }

}