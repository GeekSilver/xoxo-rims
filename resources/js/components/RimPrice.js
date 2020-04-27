import React from 'react';

const RimPrice = ({detail}) => 
    (
    <span style={{
        fontWeight:600,
        fontSize:"1.7em",
        color:"black",
        fontFamily:"comic",
        backgroundColor:"#FFF",
        opacity:0.5,
        borderRadius:"10px"
          }}>
        { Number(detail).toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
    </span>
);



export default RimPrice;