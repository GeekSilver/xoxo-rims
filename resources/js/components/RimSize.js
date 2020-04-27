import React from 'react';

const RimSize = ({size}) => (
    <span
    style={{
        position:"absolute",
        top:0,
        right:"17px",
        fontSize:"1.5em",
        color:"silvergrey",
        fontWeight:"bolder"
    }}
    >
        {`${size}"`}
    </span>
);

export default RimSize;