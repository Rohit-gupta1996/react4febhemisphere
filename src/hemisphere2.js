import React from 'react';
import northpic from './image/north.gif'
import southpic from './image/south.jpg'

const Hemisphere =({latitude}) =>
{
    const hemisphere=latitude>0?'This is the Northern hemisphere':'This is the Southern hemisphere';
    const picture=latitude>0?northpic:southpic;
    return(
        <div className="container">
        <div className="center">
            <img src={picture} alt =""/>
            </div>
            <div className="display">
                {hemisphere} 
            </div>
            </div>
    );
}
export default Hemisphere;