import React from 'react';
import { connect } from 'react-redux'
import {onPatternChanged, PatternChanged} from '../actions'
import cellPatterns from '../utils/CellPatterns';
import { StoreState } from '../reducers';
import { PatternSelectorState } from '../types';

interface Props{
    patternSelectorState: PatternSelectorState;
    onPatternChanged(selectedType: number): PatternChanged;
}
class PatternSelector extends React.Component<Props, StoreState>{
    
    selectChange(event:React.ChangeEvent<HTMLSelectElement>){
        this.props.onPatternChanged(parseInt(event.target.value));
    }
    render(){
        const patterns=[];
        const state = this.props.patternSelectorState;
        patterns.push((<option value={-1} key={-1}>Please Select</option>));
        for(let ci=0;ci<cellPatterns.length;ci++){
            const c = cellPatterns[ci];
            patterns.push((<option value={ci} key={ci}>{c.name}</option>));
        }
        return (<div>
            <select value={state.pattern} onChange={event=>{this.selectChange(event)}}>
                {patterns}
            </select>
        </div>);
    }
}


const mapStateToProps = (state: StoreState) =>{
    return { patternSelectorState:state.patternSelector }; 
}
export default connect(mapStateToProps,{onPatternChanged})(PatternSelector);

