import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Hover from "./Hover";
import Cells from "./Cells";
import { onFieldClick, onFieldMouseMove, toNextGeneration} from "../actions";
import { RECT_SIZE, MSEC_PER_GENERATION} from '../types'
import { StoreState } from '../reducers';

import "./Style.css"
import getGridSize, { getCurrentGridSize } from '../utils/sizeLib';

interface BoundingRect{ left:number; top:number;};

const Field = ()=>{
    const dispatch = useDispatch();

    const refTimer = useRef<number|null>(null);
    const refRoot = useRef<SVGSVGElement>(null);
    const boundingRectRef = useRef<BoundingRect>({
        left:0, top:0
    });

    const state = useSelector((state:StoreState)=>state.field);
    const appState = useSelector((state:StoreState)=>state.app);
    
    useEffect(() => {
        if(refRoot.current!==null){
            boundingRectRef.current = refRoot.current.getBoundingClientRect();
        }
    });

    const convertToGrid = (a: number): number => {
        return Math.round(a/RECT_SIZE);
    }

    const convertMousePosition = (ev: React.MouseEvent<SVGSVGElement>) => {
        const rect = boundingRectRef.current;
        return {
            x: convertToGrid(ev.clientX-rect.left),
            y: convertToGrid(ev.clientY-rect.top)
            }; 
    }
    const mouseOver = (ev:React.MouseEvent<SVGSVGElement>) => {
        dispatch(onFieldMouseMove(convertMousePosition(ev)));
    }

    const fieldClicked = (ev: React.MouseEvent<SVGSVGElement>) => {
        if(!state.playing){
            dispatch(onFieldClick(convertMousePosition(ev)));
        }
    }

    if(state.playing && refTimer.current===null){
        refTimer.current = window.setInterval(()=>{
            dispatch(toNextGeneration(state.gridx, state.gridy));
        }, MSEC_PER_GENERATION);
    }else if(!state.playing && refTimer.current!==null){
        window.clearInterval(refTimer.current);
        refTimer.current = null;
    }

    const {gridx, gridy, width, height} 
        = getGridSize({ x: appState.windowX, y: appState.windowY });


    const outerBorder = (<rect width={width} 
        height={height} 
        className="field-line" />);

    const vLines = [];
    for(let xi=0;xi<gridx-1;xi++){
        const _x = (xi+1)*RECT_SIZE;
        vLines.push(<line key={xi} 
            x1={_x} x2={_x} 
            y1={0} y2={height} 
            className="field-line" />);
    }
    const hLines = [];
    for(let yi=0;yi<gridy-1;yi++){
        const _y = (yi+1)*RECT_SIZE;
        hLines.push(<line key={yi} 
                    x1={0} x2={width} 
                    y1={_y} y2={_y} 
                    className="field-line" />);
    }

    return (<svg 
        width={ width } height={ height }
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onMouseMove={mouseOver}
        onClick={fieldClicked}
        ref={refRoot}>

        {outerBorder}
        {vLines}
        {hLines}

        <Cells />
        <Hover />

    </svg>);
    
};

export default Field;


