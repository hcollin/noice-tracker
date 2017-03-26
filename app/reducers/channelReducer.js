
export default function channelReducer(state={}, action) {
    switch(action.type) {
        case "CHANNEL_CREATE": 
            return state.concat([
                    {
                        id: action.id,
                        name: action.id,
                        playing: false,
                        effects: [],
                        gain: 0.5,
                        channelType: action.channelType
                    }
            ]);
        case "CHANNEL_REMOVE":
            return state.filter((channel) => {
                return channel.id != action.id;
            })
        default:
            return state;
    }
}