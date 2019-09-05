import * as actionTypes from '../types/actionTypes';
import { ClifeAction, FieldMouseMove } from '../actions';
import { HoverState } from '../types';

const initialState = {x:0, y:0, show:true};

const hover = (state: HoverState = initialState, action: ClifeAction)=>{
    if(action.type===actionTypes.FIELD_MOUSE_MOVE){
        const {gridPoint} = (action as FieldMouseMove);
        const {x,y} = gridPoint;

        if(x===null || y===null){  //外
            return state;
        }
        return {show:true,x,y};
    }
    return state;
};

export default hover;
