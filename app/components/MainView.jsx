import React from 'react';

import Mixer from './Mixer';


export default class MainView extends React.Component {
    render() {
        return (
            <div id="MainView" className="layout-content-main">
                <Mixer />
            </div>
        );
    }
}
