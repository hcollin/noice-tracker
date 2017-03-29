import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Channel from './Channel';

import {channelCreate} from '../actions/channelActions';

const Mixer = ({channels, onCreateChannel}) => (
    <div id="mixer" className="mixer">
        { channels.map((channel, index) => (
            <Channel key={index} channel={channel} />
        ))}
        <button onClick={onCreateChannel}>+</button>
    </div>
);

const mapStateToProps = state => {
  return { channels: state.channels };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateChannel: () => {
        dispatch(channelCreate());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mixer)
