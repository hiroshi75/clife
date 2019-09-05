import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

import {
        onSendPlayCommand, 
        toNextGeneration, 
        onClearClicked, 
        SendPlayCommand, 
        NextGeneration, 
        ClearClicked
    } from '../actions'
import { ControlButtonsState } from '../types';
import {StoreState} from '../reducers';


export interface Props {
    gridx: number;
    gridy: number;
    buttons: ControlButtonsState;
    onSendPlayCommand(play:boolean): SendPlayCommand;
    toNextGeneration(x: number, y: number): NextGeneration;
    onClearClicked(): ClearClicked;
}

class ContrtolButtons extends React.Component<Props, StoreState>{
    timer: number | undefined;

    constructor(props: Props){
        super(props);
        this.timer = undefined;
    }

    playClicked(){
        const playing = !this.props.buttons.playing;
        this.props.onSendPlayCommand(playing);
        if(playing){
            this.timer = window.setInterval(()=>{
                this.props.toNextGeneration(this.props.gridx, this.props.gridy);
            }, 50);
        }else{
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }

    render(){
        const a = this.props.buttons;
        const playLabel = (a.playing)? "Stop" : "Start";
        return (<div>
            <Button color="primary" variant="contained" 
                onClick={ev=>{this.playClicked()}} >
                { playLabel }
            </Button>
            <Button disabled={a.playing} variant="contained" 
                onClick={this.props.onClearClicked} >
                Clear
            </Button>
        </div>);
    }
}

const mapStateToProps = (state: StoreState) => {
    return { buttons:state.controlButtons };    
};
export default connect(
    mapStateToProps,
    {onSendPlayCommand, toNextGeneration, onClearClicked}
)(ContrtolButtons);