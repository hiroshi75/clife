

export type XPositionType = "left" | "center" | "right";
export type YPositionType = "top" | "center" | "bottom";

export interface CellPattern{
    name: string;
    pattern: string[];
    position: {
        x: XPositionType,
        y: YPositionType
    };
};

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
        position: {x:"left", y:"top"}},
    {
        name: "Glider",
        pattern: [
            " X",
            "  X",
            "XXX",
        ],
        position: {x:"left", y:"top"}},
    {
        name: "Light-weight spaceship",
        pattern: [
            "X  X",
            "    X",
            "X   X",
            " XXXX"
        ],
        position: {x:"left", y:"top"}},
    {
        name: "Acorn",
        pattern: [
            " X",
            "   X",
            "XX  XXX",
        ],
        position: {x:"center", y:"center"}},
    {
        name: "R-pentomino",
        pattern: [
            " XX",
            "XX",
            " X",
        ],
        position: {x:"center", y:"center"}},
];

export default cellPatterns;
