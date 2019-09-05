import * as actionTypes from '../types/actionTypes';
import nextGeneration from '../utils/NextGeneration';
import {ClifeAction, FieldClick} from '../actions';
import { CellsState } from '../types';
import pastePattern from '../utils/PatternPaster';
import cellPatterns from '../utils/CellPatterns';

const initialState = {
    cells:[]
};

const cells = (state:CellsState = initialState, action:ClifeAction)=>{

    if(action.type===actionTypes.FIELD_CLICK){
        return putCell(state, action as FieldClick);

    }else if(action.type===actionTypes.NEXT_GENERATION){
        return {cells: nextGeneration(state.cells, action.gridSize)};
        
    }else if(action.type===actionTypes.CLEAR_CLICKED){
        return {cells:[]};
    }else if(action.type===actionTypes.PATTERN_CHANGED){
        if(action.selectedType!==-1){
            return {cells: pastePattern(cellPatterns[action.selectedType])};
        }
    }
    return state;
};

const putCell = (state: CellsState, action: FieldClick) => {
    const {gridPoint} = action;
    const {x,y} = gridPoint;
    const _cells = state.cells;
    // Check duplicate
    for(let p of _cells){
        if(p.x<x){ continue; }
        if(p.x>x){ break; }
        if(p.y===y){ // If cell exists here, delete it.
            return {cells:_cells.filter(c=>(c.x!==x || c.y!==y))}; 
        }
    }
    // Add new cell and sort
    _cells.push({x,y});
    _cells.sort((a,b)=>{
        if(a.x!==b.x){
            return a.x-b.x;
        }
        return a.y-b.y;
    });

    return {cells:_cells}; 
};

export default cells;
