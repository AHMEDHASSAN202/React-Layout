import React from 'react';
import { Obj } from 'reinforcements';

export class ReactorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.init();
    }

    componentDidMount() {
        this.ready();
    }

    getSnapshotBeforeUpdate(props, state) {
        let data = this.beforeUpdating(props, state);
        
        return data || null;
    }

    componentDidUpdate(props, state, snapshot) {
        this.onUpdate(props, state, snapshot);
    }

    componentWillUnmount() {
        this.destroy();
    }

    /**
     * Call init in constructor hook
     * 
     * @return void
     */
    init() {}

    /**
     * Call in componentDidMount hook
     * 
     * @return void
     */
    ready() {}

    /**
     * Call in getSnapshotBeforeUpdate hook
     * 
     * @param {Object} props 
     * @param {Object} state 
     */
    beforeUpdating(props, state) {}

    /**
     * Call in componentDidUpdate hook
     * 
     * @param {Object} props 
     * @param {Object} state 
     * @param {Object} snapshot 
     */
    onUpdate(props, state, snapshot) {}

    /**
     * Call in componentWillUnmount hook
     * 
     * @return void
     */
    destroy() {}

    /**
     * Set value in component state
     * 
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value) {
        this.setState(
                Obj.set(this.state, key, value)
            );
    }

    /**
     * Get value from component state
     * 
     * @param {*} key 
     * @param {*} $default 
     */
    get(key, $default) {
        return Obj.get(this.state, key, $default);
    }
}