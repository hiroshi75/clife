import * as actionTypes from '../types/action';
import { ClifeAction } from '../actions';
import { ControlButtonsState } from '../types/states';

const initialState = { playing:false };

const controlButtons = (state:ControlButtonsState=initialState, 
                        action: ClifeAction)=>{
    if(action.type===actionTypes.SEND_PLAY_COMMAND){
        if(state.playing!==action.play){
            return {playing: action.play}
        }
    }
    return state;
};

export default controlButtons;
