import React from 'react';
import { connect } from 'react-redux'

import { HoverState } from '../types';
import { StoreState } from '../reducers';

interface Props{
    hover: HoverState;
    rectSize: number;
}
const style={ fill: "red" };

class Hover extends React.Component<Props,StoreState>{

    constructor(props: Props){
        super(props);
    }
    render(){
        const {x, y, show} = this.props.hover;
        const { rectSize } = this.props;

        if(show){
            return (<rect 
                width={rectSize}
                height={rectSize}
                x={x*rectSize}
                y={y*rectSize}
                style={style}
            />);
        } else{
            return null;
        }
    }
};

const mapStateToProps = (state: StoreState) => {
    return { hover:state.hover };    
};

export default connect(
    mapStateToProps
)(Hover);