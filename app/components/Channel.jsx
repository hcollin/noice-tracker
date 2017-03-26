import React from 'react';

export default class Channel extends React.Component {
    render() {
        return (
            <div className="mixer-channel">
                <p>{this.props.channel.name}</p>
            </div>
        );
    }
}