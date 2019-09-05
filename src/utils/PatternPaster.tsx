import { CellPattern } from "./CellPatterns";
import { CellsState, CellType } from "../types";

const pastePattern = (cellPattern:CellPattern): CellType[] => {
    const { pattern, position } = cellPattern;
    let {x,y} = position;
    const cells: CellType[] = [];
    pattern.forEach(row =>{
        let cx = x;
        for(let i=0;i<row.length;i++){
            if(row[i]=="X"){
                cells.push({x:cx, y})
            }
            cx++;
        }
        y++;
    });
    return cells;
};

export default pastePattern;