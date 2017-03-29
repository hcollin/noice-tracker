import React from 'react';

import ChannelButton from './ChannelButton';


const Channel = ({channel}) => (
     <div className="mixer-channel">
            <p>{channel.name}</p>
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
