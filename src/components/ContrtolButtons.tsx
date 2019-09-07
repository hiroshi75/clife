import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';

import {
        onSendPlayCommand, 
        onClearClicked
    } from '../actions'
import {StoreState} from '../reducers';



const ContrtolButtons = ()=>{
    const dispatch = useDispatch();
    const state = useSelector(
            (state: StoreState) => state.controlButtons);

    const playLabel = (state.playing)? "Stop" : "Start";
    return (<div>
        <Button color="primary" variant="contained" 
            onClick={ev=>dispatch(onSendPlayCommand(!state.playing))} >
            { playLabel }
        </Button>
        <Button disabled={state.playing} variant="contained" 
            onClick={()=>dispatch(onClearClicked())} >
            Clear
        </Button>
    </div>);
}


export default ContrtolButtons;