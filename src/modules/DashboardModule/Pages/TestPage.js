import React from 'react';
import { ReactorComponent } from '../../../core/ReactorComponent';
import { NavLink } from 'react-router-dom';

export class TestPage extends ReactorComponent {

    render () {
        return ( 
            <>
                <h1>Test Page </h1>
                <h1><NavLink to="/dashboard">Dashboard Page </NavLink></h1>
            </>
         );
    }
}