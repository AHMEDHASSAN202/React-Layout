import React from 'react';
import { ReactorComponent } from '../../../core/ReactorComponent';
import { NavLink } from 'react-router-dom';

class DashboardPage extends ReactorComponent {

    render () {
        return ( 
            <>
                <h1> <NavLink to="/admin/test">Test Page</NavLink> </h1>
                <h1> <NavLink to="/home">Home Page</NavLink> </h1>
            </>
         );
    }
}


export default DashboardPage;