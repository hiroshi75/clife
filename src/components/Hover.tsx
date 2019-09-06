import React from 'react';
import { connect, useSelector } from 'react-redux'

import { HoverState } from '../types';
import { StoreState } from '../reducers';

interface Props{
    rectSize: number;
}
const style={ fill: "red" };

const Hover = (props:Props)=>{
    const state = useSelector((state: StoreState)=>state.hover);
    const {x, y, show} = state;
    const { rectSize } = props;

    if(show){
        return (<rect 
            width={rectSize}
            height={rectSize}
            x={x*rectSize}
            y={y*rectSize}
            style={style}
        />);
    } else{
        return null;
    }
    
};

export default Hover;
