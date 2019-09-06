import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';

import {
        onSendPlayCommand, 
        onClearClicked
    } from '../actions'
import {StoreState} from '../reducers';



const ContrtolButtons = ()=>{
    const dispatch = useDispatch();
    const playClicked=(currentPlaying: boolean)=>{
        currentPlaying = !currentPlaying;
        
        dispatch(onSendPlayCommand(currentPlaying));
    }

    const controlButtonsState = useSelector(
            (state: StoreState) => state.controlButtons);

    const playLabel = (controlButtonsState.playing)? "Stop" : "Start";
    return (<div>
        <Button color="primary" variant="contained" 
            onClick={ev=>{playClicked(controlButtonsState.playing)}} >
            { playLabel }
        </Button>
        <Button disabled={controlButtonsState.playing} variant="contained" 
            onClick={()=>dispatch(onClearClicked())} >
            Clear
        </Button>
    </div>);
}


export default ContrtolButtons;