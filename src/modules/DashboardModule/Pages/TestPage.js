import React from 'react';
import { ReactorComponent } from '../../../core/ReactorComponent';
import { NavLink } from 'react-router-dom';

class TestPage extends ReactorComponent {

    render () {
        return ( 
            <h1><NavLink to="/admin">Dashboard Page </NavLink></h1>
         );
    }
}


export default TestPage;