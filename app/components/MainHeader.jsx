import React from 'react';

export default class MainHeader extends React.Component {
    
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Click!");
    }
    
    render() {
        return (
            <div id="MainHeader" className="layout-footer el-basic-bg">                
                <button onClick={this.handleClick}>Press</button>
            </div>
        );
    }
}