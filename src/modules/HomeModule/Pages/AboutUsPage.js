import React from 'react';
import { ReactorComponent } from '../../../core/ReactorComponent';
import { NavLink } from 'react-router-dom';

class AboutUsPage extends ReactorComponent {

    render () {
        return ( 
            <h1><NavLink to="/home">Home Page </NavLink></h1>
         );
    }
}


export default AboutUsPage;