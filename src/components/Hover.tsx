import React from 'react';
import { useSelector } from 'react-redux'

import { RECT_SIZE } from '../types';
import { StoreState } from '../reducers';

const style={ fill: "red" };

const Hover = ()=>{
    const state = useSelector((state: StoreState)=>state.hover);
    const {x, y, show} = state;

    if(show){
        return (<rect 
            width={RECT_SIZE}
            height={RECT_SIZE}
            x={x*RECT_SIZE}
            y={y*RECT_SIZE}
            style={style}
        />);
    } else{
        return null;
    }
    
};

export default Hover;
