import React from 'react'
import { ReactorComponent } from '../../core/ReactorComponent';
import AdminLayout from '../../shared/Components/layouts/admin-layout/admin-layout';


export default class DashboardLayout extends ReactorComponent {

    render() {
        return (
            <AdminLayout routes={this.props.routes}></AdminLayout>
        );
    }

}