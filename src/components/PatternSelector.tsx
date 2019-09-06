import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {onPatternChanged} from '../actions'
import cellPatterns from '../utils/CellPatterns';
import { StoreState } from '../reducers';

const PatternSelector = () =>{
    const dispatch = useDispatch();
    const state = useSelector((state: StoreState)=>state.patternSelector);
    
    const selectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(onPatternChanged(parseInt(event.target.value)));
    }

    const patterns=[];
    patterns.push((<option value={-1} key={-1}>Please Select</option>));
    for(let ci=0;ci<cellPatterns.length;ci++){
        const c = cellPatterns[ci];
        patterns.push((<option value={ci} key={ci}>{c.name}</option>));
    }
    return (<div>
        <select value={state.pattern} onChange={selectChange}>
            {patterns}
        </select>
    </div>);
    
}
export default PatternSelector;


