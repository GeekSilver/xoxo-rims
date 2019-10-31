import React from 'react';

const RimImage =  ({src}) => (
    <img 
    src={src}
    alt="the image of the rim"
    style={{
        display:"block",
        maxWidth: "100%",
        height: "168px",
        margin: "auto"
    }}
    />
);

export default RimImage;