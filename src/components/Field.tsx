import React from 'react';
import { connect } from 'react-redux';

import Hover from "./Hover";
import Cells from "./Cells";
import { onFieldClick, onFieldMouseMove, FieldMouseMove, FieldClick } from "../actions";
import { FieldState} from '../types'
import { GridPoint } from '../types/GeneralTypes';
import { StoreState } from '../reducers';

import "./Style.css"

export interface Props{
    gridx: number;
    gridy: number;
    rectSize: number;
    field: FieldState;
    onFieldMouseMove(p: GridPoint): FieldMouseMove;
    onFieldClick(p: GridPoint): FieldClick;

}

class Field extends React.Component<Props, StoreState>{

    width: number;
    height: number;
    boundingRect: {left:number; top:number;};
    rootRef: React.RefObject<SVGSVGElement>;

    constructor(props: Props){
        super(props);

        this.width = props.gridx * props.rectSize;
        this.height = props.gridy * props.rectSize;
        this.boundingRect = {left: 0, top:0};

        this.rootRef = React.createRef<SVGSVGElement>();
    }

    convertToGrid(a: number): number{
        return Math.round(a/this.props.rectSize);
    }

    componentDidMount(){
        if(this.rootRef.current!==null){
            const r = this.rootRef.current.getBoundingClientRect();
            this.boundingRect.left = r.left;
            this.boundingRect.top = r.top;
        }
    }


    getBoundingRect(){
        return this.boundingRect;
    }

    convertMousePosition(ev: React.MouseEvent<SVGSVGElement>){
        const rect = this.getBoundingRect();
        return {
            x: this.convertToGrid(ev.clientX-rect.left),
            y: this.convertToGrid(ev.clientY-rect.top)
            }; 
    }
    mouseOver(ev:React.MouseEvent<SVGSVGElement>){
        this.props.onFieldMouseMove(this.convertMousePosition(ev));
    }

    fieldClicked(ev: React.MouseEvent<SVGSVGElement>){
        if(!this.props.field.playing){
            this.props.onFieldClick(this.convertMousePosition(ev));
        }
    }

    render(){


        const outerBorder = (<rect width={this.width} 
            height={this.height} 
            className="field-line" />);

        const vLines = [];
        for(let xi=0;xi<this.props.gridx-1;xi++){
            const _x = (xi+1)*this.props.rectSize;
            vLines.push(<line key={xi} 
                x1={_x} x2={_x} 
                y1={0} y2={this.height} 
                className="field-line" />);
        }
        const hLines = [];
        for(let yi=0;yi<this.props.gridy-1;yi++){
            const _y = (yi+1)*this.props.rectSize;
            hLines.push(<line key={yi} 
                        x1={0} x2={this.width} 
                        y1={_y} y2={_y} 
                        className="field-line" />);
        }

        return (<svg 
            width={ this.width } height={ this.height }
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onMouseMove={ev=>{this.mouseOver(ev)}}
            onClick={ev=>{this.fieldClicked(ev)}}
            ref={this.rootRef}>

            {outerBorder}
            {vLines}
            {hLines}

            <Cells rectSize={this.props.rectSize} />
            <Hover rectSize={this.props.rectSize} />

        </svg>);
    };
}
const mapStateToProps = (state: StoreState) => {
    return { field:state.field };    
};

export default connect(
    mapStateToProps,
    {onFieldMouseMove, onFieldClick}
)(Field);


