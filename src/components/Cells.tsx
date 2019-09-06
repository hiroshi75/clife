import React from 'react';
import { connect, useSelector } from 'react-redux';

import { StoreState } from '../reducers';

export interface Props {
    rectSize: number;
}

const  Cells =(props: Props)=>{
    let fieldState = useSelector((state:StoreState)=>state.field);
    const rectSize = props.rectSize;

    const cellsElement = fieldState.cells.map(({x, y}, index)=>{
        
        const rx = x * rectSize;
        const ry = y * rectSize;

        return (<rect key={ index } 
                    x={ rx } 
                    y={ ry } 
                    width={ rectSize } 
                    height={ rectSize } 
                    className="cell" />);

    });
    return (<g>{ cellsElement }</g>);
};

export default Cells;