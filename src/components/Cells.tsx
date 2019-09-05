import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../reducers';
import { CellsState } from '../types';

export interface Props {
    rectSize: number;
    cellsState: CellsState;
}

const  Cells =(props: Props)=>{
    const rectSize = props.rectSize;

    const cellsElement = props.cellsState.cells.map(({x, y}, index)=>{
        
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

const mapStateToProps = (state: StoreState) =>{
    return { cellsState:state.cells }; 
}
export default connect(mapStateToProps)(Cells);
