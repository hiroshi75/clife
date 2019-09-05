import * as actionTypes from '../types/actionTypes';
import { ClifeAction } from '../actions';
import { FieldState } from '../types';


const initiasState = {
    playing:false,
    zoom: 1.0
};


const field = (state: FieldState=initiasState, action: ClifeAction)=>{
    if(action.type===actionTypes.SEND_PLAY_COMMAND){
        return {playing:action.play, zoom: state.zoom};
    }
    return state;
};

export default field;
