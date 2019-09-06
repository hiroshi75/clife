import * as actionTypes from '../types/actionTypes';
import { ClifeAction, FieldClick, SendPlayCommand } from '../actions';
import { FieldState, CellType } from '../types';
import nextGeneration from '../utils/NextGeneration';
import pastePattern from '../utils/PatternPaster';
import cellPatterns from '../utils/CellPatterns';


const initiasState = {
    playing:false,
    zoom: 1.0,
    x: 0,
    y: 0,
    cells: [] as CellType[]
};


const field = (state: FieldState=initiasState, action: ClifeAction)=>{
    if(action.type===actionTypes.SCREEN_SIZE_CHANGED){
        return {...state, ...action.size}
    }if(action.type===actionTypes.SEND_PLAY_COMMAND){
        return {...state, playing:action.play};
    }else if(action.type===actionTypes.FIELD_CLICK){
        return {...state, cells: putCell(state, action as FieldClick)};
    }else if(action.type===actionTypes.NEXT_GENERATION){
        return {...state, cells: nextGeneration(state.cells, action.gridSize)};
        
    }else if(action.type===actionTypes.CLEAR_CLICKED){
        return {...state, cells:[] as CellType[]};
    }else if(action.type===actionTypes.PATTERN_CHANGED){
        if(action.selectedType!==-1){
            return {...state, cells: pastePattern(cellPatterns[action.selectedType])};
        }
    }

    return state;
};

const putCell = (state: FieldState, action: FieldClick) => {
    const {gridPoint} = action;
    const {x,y} = gridPoint;
    const _cells = state.cells;
    // Check duplicate
    for(let p of _cells){
        if(p.x<x){ continue; }
        if(p.x>x){ break; }
        if(p.y===y){ // If cell exists here, delete it.
            return _cells.filter(c=>(c.x!==x || c.y!==y)); 
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

    return _cells; 
};

export default field;
