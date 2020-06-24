import React from 'react';
import { ReactorComponent } from '../../../core/ReactorComponent';
import { NavLink } from 'react-router-dom';

class HomePage extends ReactorComponent {

    render () {
        return ( 
            <h1> <NavLink to="/about-us">Ubout Us</NavLink> </h1>
         );
    }
}


export default HomePage;