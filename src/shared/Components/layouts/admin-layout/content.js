import React from 'react';
import { ReactorComponent } from '../../../../core/ReactorComponent';

export default class Content extends ReactorComponent {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}