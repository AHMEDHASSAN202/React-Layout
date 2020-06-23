import React from 'react';
import { PageComponent } from "../../../../core/PageComponent";

class HomePage extends PageComponent {

    ready() {
        this.setPageTitle('Home');
        this.setFavicon('/favi.ico');
        this.set('title', 'Home Page');
    }

    render() {
        return (
            <h1>{this.get('title')}</h1>
        );
    }
}

export default HomePage;