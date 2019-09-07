import React from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from '../reducers';
import { RECT_SIZE } from '../types';

const  Cells =()=>{
    let fieldState = useSelector((state:StoreState)=>state.field);

    const cellsElement = fieldState.cells.map(({x, y}, index)=>{
        
        const rx = x * RECT_SIZE;
        const ry = y * RECT_SIZE;

        return (<rect key={ index } 
                    x={ rx } 
                    y={ ry } 
                    width={ RECT_SIZE } 
                    height={ RECT_SIZE } 
                    className="cell" />);

    });
    return (<g>{ cellsElement }</g>);
};

export default Cells;