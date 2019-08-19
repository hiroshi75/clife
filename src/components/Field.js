import React from 'react';
import Hover from "./Hover"
import Cells from "./Cells"

const lineStyle = {
    strokeWidth: 1,
    stroke: "gray"
};

const Field= (props)=>{
    let {gridx, gridy, rectSize} = props;
    rectSize =parseInt(rectSize);
    gridx = parseInt(gridx);
    gridy = parseInt(gridy);

    const width = gridx * rectSize;
    const height = gridy * rectSize;

    const outerBorder = (<rect width={width} 
        height={height} 
        style={lineStyle} />);

    const vLines = [...Array(gridx-1).keys()].map((v,index)=>{
        const _x = (v+1)*rectSize;
        return (<line key={v} 
                    x1={_x} x2={_x} 
                    y1={0} y2={height} 
                    style={lineStyle} />);
    });

    const hLines = [...Array(gridy-1).keys()].map((v,index)=>{
        const _y = (v+1)*rectSize;
        return (<line key={v} 
                    x1={0} x2={width} 
                    y1={_y} y2={_y} 
                    style={lineStyle} />);
    });

    return (<svg 
        width={ width } height={ height } 
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">

        {outerBorder}
        {vLines}
        {hLines}

        <Hover rectSize={rectSize} />
        <Cells rectSize={rectSize} />
    </svg>);
};

export default Field;


