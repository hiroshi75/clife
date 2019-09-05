import * as actionTypes from '../types/actionTypes';
import { GridPoint } from '../types/GeneralTypes';

export interface FieldMouseMove{
    type: actionTypes.FIELD_MOUSE_MOVE;
    gridPoint: GridPoint;
}
export const onFieldMouseMove= (p: GridPoint): FieldMouseMove => ({
    type: actionTypes.FIELD_MOUSE_MOVE, 
    gridPoint: p
    });


export interface FieldClick{
    type: actionTypes.FIELD_CLICK;
    gridPoint: GridPoint;
}
export const onFieldClick = (p: GridPoint): FieldClick=>({
    type: actionTypes.FIELD_CLICK,
    gridPoint: p
});


export interface SendPlayCommand{
    type: actionTypes.SEND_PLAY_COMMAND;
    play: boolean;
}
export const onSendPlayCommand = (play: boolean): SendPlayCommand=>({
    type: actionTypes.SEND_PLAY_COMMAND,
    play  // true:実行 false: 停止
});


export interface NextGeneration{
    type:actionTypes.NEXT_GENERATION;
    gridSize: GridPoint;
}
export const toNextGeneration = (x: number,y: number): NextGeneration=>({
    type:actionTypes.NEXT_GENERATION,
    gridSize: {x,y}
});


export interface ClearClicked{
    type: actionTypes.CLEAR_CLICKED;
}
export const onClearClicked = (): ClearClicked=>({
    type: actionTypes.CLEAR_CLICKED
});

export interface PatternChanged{
    type: actionTypes.PATTERN_CHANGED;
    selectedType: number;
}
export const onPatternChanged = (selectedType: number):PatternChanged =>({
    type: actionTypes.PATTERN_CHANGED,
    selectedType: selectedType
})

export type ClifeAction = FieldMouseMove | FieldClick | SendPlayCommand
     | NextGeneration | ClearClicked | PatternChanged;


