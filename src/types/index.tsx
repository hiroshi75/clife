import { GridPoint } from "./GeneralTypes";

export const RECT_SIZE = 7;
export const MSEC_PER_GENERATION = 20;

export interface AppState {
    windowX:number;
    windowY:number;
}

export interface CellType {
    x: number;
    y: number;
}

export interface FieldState {
    playing: boolean;
    zoom: number;
    x: number;
    y: number;
    cells: CellType[];
    timer?: number;
}

export interface HoverState {
    show: boolean;
    x: number;
    y:number;
}

export interface ControlButtonsState{
    playing: boolean;
}

export interface PatternSelectorState{
    pattern: number;
}

