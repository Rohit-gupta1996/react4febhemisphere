import React from 'react';


const Hemisphere =({latitude}) =>
{
    const hemisphere=latitude>0?'Norther hemisphere':'Southern hemisphere';
    return(
        <div>{hemisphere}</div>
    )
}
export default Hemisphere;