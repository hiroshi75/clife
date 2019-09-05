
export interface CellType {
    x: number;
    y: number;
}

export interface CellsState {
    cells:CellType[];
}

export interface FieldState {
    playing: boolean;
    zoom: number;
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

