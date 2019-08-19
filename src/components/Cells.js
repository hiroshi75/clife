import React from 'react';

const cellStyle={
    fill: "rgb(90,90,255)",
    stroke: "rgb(120,120,255)"
};

class Cells extends React.Component{
    constructor(props){
        super(props);
        this.rectSize = props.rectSize || 5;

        this.initialState = {
            cells:[] //[{x:3,y:5},{x:10,y:20}]
        };
    }
    render(){
        const a = this.props.hover || this.initialState;
        let {cells} = a;
        cells.sort((a,b)=>{
            if(a.x!==b.x){
                return a.x-b.x;
            }
            return a.y-b.y;
        });

        const cellsElement = cells.map((c, index)=>{
            const x = c.x*this.rectSize;
            const y = c.y*this.rectSize;
            return (<rect key={index} 
                        x={x} 
                        y={y} 
                        width={this.rectSize} 
                        height={this.rectSize} 
                        style={cellStyle} />);
        });
        return (<g>{cellsElement}</g>);
    }
};

export default Cells;