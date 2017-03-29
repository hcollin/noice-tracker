import React from 'react';

export default class ChannelButton extends React.Component { 
    render() {
        return (
            <button className="button" onClick={this.props.onClickHandler}>{this.props.text}</button>
        )
    };
}

