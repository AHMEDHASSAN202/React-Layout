import React from 'react'
import { ReactorComponent } from '../../core/ReactorComponent';
import Layout from '../../shared/Components/layouts/admin-layout/layout';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';


export default class HomeLayout extends ReactorComponent {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/home" component={HomePage}/>                
                    <Route path="/about-us" component={AboutUsPage}/>              
                </Switch>
            </Layout>
        );
    }

}