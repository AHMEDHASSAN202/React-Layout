import React from 'react';
import { ReactorComponent } from '../../../../../core/ReactorComponent';
import Nav from './nav';

export default class Header extends ReactorComponent {

    render() {
        return (
            <Nav title="Dashboard" color="primary"></Nav>
        );
    }

}