import { GridPoint } from "../types/GeneralTypes";

export interface CellPattern{
    name: string;
    pattern: string[];
    position: GridPoint;
}

const cellPatterns: CellPattern[]=[
    {
        name: "Glider Gun",
        pattern: [
            "                        X",
            "                      X X",
            "            XX      XX            XX",
            "           X   X    XX            XX",
            "XX        X     X   XX",
            "XX        X   X XX    X X",
            "          X     X       X",
            "           X   X",
            "            XX"
        ],
        position: {x:3, y:3}},
    {
        name: "Glider",
        pattern: [
            "XXX",
            "X",
            " X"
        ],
        position: {x:100, y:50}},
    {
        name: "Light-weight spaceship",
        pattern: [
            " X  X",
            "X",
            "X   X",
            "XXXX"
        ],
        position: {x:100, y:50}},
    {
        name: "Acorn",
        pattern: [
            " X",
            "   X",
            "XX  XXX",
        ],
        position: {x:75, y:50}},
];

export default cellPatterns;
