import { CellType } from ".";

export interface AppState {
    windowX:number;
    windowY:number;
}

export interface FieldState {
    playing: boolean;
    zoom: number;
    gridx: number;
    gridy: number;
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
