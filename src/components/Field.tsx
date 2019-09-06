import React from 'react';
import { connect } from 'react-redux';

import Hover from "./Hover";
import Cells from "./Cells";
import { onFieldClick, onFieldMouseMove, FieldMouseMove, 
    FieldClick, toNextGeneration, NextGeneration} from "../actions";
import { FieldState, AppState, RECT_SIZE, MSEC_PER_GENERATION} from '../types'
import { GridPoint } from '../types/GeneralTypes';
import { StoreState } from '../reducers';

import "./Style.css"

export interface Props{
    field: FieldState;
    app: AppState;
    onFieldMouseMove(p: GridPoint): FieldMouseMove;
    onFieldClick(p: GridPoint): FieldClick;
    toNextGeneration(x: number, y: number): NextGeneration;

}

class Field extends React.Component<Props, StoreState>{

    boundingRect: {left:number; top:number;};
    rootRef: React.RefObject<SVGSVGElement>;
    timer: number | null;

    constructor(props: Props){
        super(props);

        this.boundingRect = {left: 0, top:0};

        this.rootRef = React.createRef<SVGSVGElement>();
        this.timer = null;
    }

    convertToGrid(a: number): number{
        return Math.round(a/RECT_SIZE);
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
        if(this.props.field.playing && this.timer===null){
            console.log("SETTIMER");
            console.log(this.props.field);
            this.timer = window.setInterval(()=>{
                this.props.toNextGeneration(this.props.field.x, this.props.field.y);
            }, MSEC_PER_GENERATION);
        }else if(!this.props.field.playing && this.timer!==null){
            window.clearInterval(this.timer);
            this.timer = null;
        }
        const width = this.props.app.windowX;
        const height = this.props.app.windowY;
        const gridx = this.props.app.windowX/RECT_SIZE;
        const gridy = this.props.app.windowY/RECT_SIZE;

        const outerBorder = (<rect width={width} 
            height={height} 
            className="field-line" />);

        const vLines = [];
        for(let xi=0;xi<gridx-1;xi++){
            const _x = (xi+1)*RECT_SIZE;
            vLines.push(<line key={xi} 
                x1={_x} x2={_x} 
                y1={0} y2={height} 
                className="field-line" />);
        }
        const hLines = [];
        for(let yi=0;yi<gridy-1;yi++){
            const _y = (yi+1)*RECT_SIZE;
            hLines.push(<line key={yi} 
                        x1={0} x2={width} 
                        y1={_y} y2={_y} 
                        className="field-line" />);
        }

        return (<svg 
            width={ width } height={ height }
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onMouseMove={ev=>{this.mouseOver(ev)}}
            onClick={ev=>{this.fieldClicked(ev)}}
            ref={this.rootRef}>

            {outerBorder}
            {vLines}
            {hLines}

            <Cells rectSize={RECT_SIZE} />
            <Hover rectSize={RECT_SIZE} />

        </svg>);
    };
}
const mapStateToProps = (state: StoreState) => {
    return { field:state.field, app:state.app };    
};

export default connect(
    mapStateToProps,
    {onFieldMouseMove, onFieldClick, toNextGeneration}
)(Field);


