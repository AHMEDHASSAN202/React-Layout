import React from 'react';
import { ReactorComponent } from '../../../../core/ReactorComponent';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Content from './../content';
import Footer from './footer/footer';
import { ThemeProvider } from '@material-ui/core';
import { AdminTheme } from '../../../Constants/theme';

export default class AdminLayout extends ReactorComponent {

    render() {
        return (
            <ThemeProvider theme={AdminTheme}>
                <Header />
                <Sidebar />
                <Content routes={this.props.routes}></Content>
                <Footer />
            </ThemeProvider>
        )
    }

}