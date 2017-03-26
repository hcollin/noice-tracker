
let _CHANNEL_ID = 1;

export const channelCreate = (channelType="FILE") => {
    return {
        type: "CHANNEL_CREATE",
        id: "channel-"+_CHANNEL_ID++,
        channelType: channelType
    };
};

export const channelRemove = (id) => {
    return {
        type: "CHANNEL_REMOVE",
        id: id
    };
};
