import React from 'react';

const style={ fill: "red" };

class Hover extends React.Component{
    constructor(props){
        super(props);
        this.rectSize = props.rectSize || 5;

        this.initialState = {
            gridx: 0,
            gridy: 0,
            show: false
        };
    }
    render(){
        const a = this.props.hover || this.initialState;
        const {x, y, show} = a;

        if(show){
            return (<rect 
                width={this.rectSize}
                height={this.rectSize}
                x={x*this.rectSize}
                y={y*this.rectSize}
                style={style}
            />);
        } else{
            return null;
        }
    }
};

export default Hover;