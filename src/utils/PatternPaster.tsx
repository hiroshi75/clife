import { CellPattern, XPositionType, YPositionType } from "./cellPatterns";
import {  CellType } from "../types";
import { getCurrentGridSize } from "./sizeLib";

const convertPosition = (px:XPositionType, py:YPositionType, 
        patternWidth:number,patternHeight:number )=>{
    let x=0;
    let y=0;
    const currentSize = getCurrentGridSize();
    if(px==="center"){
        x = Math.floor(currentSize.gridx / 2);
    }else if(px==="right"){
        x = Math.max(currentSize.gridx-patternWidth, 0);
    }
    if(py==="center"){
        y = Math.floor(currentSize.gridy / 2);
    }else if(py==="bottom"){
        y = Math.max(currentSize.gridy-patternHeight, 0);
    }
    return {x,y}
};

const pastePattern = (cellPattern:CellPattern): CellType[] => {
    const { pattern, position } = cellPattern;
    const patternHeight = pattern.length;
    const patternWidth = Math.max(...pattern.map((r)=>r.length));
    let {x,y} = convertPosition(position.x, position.y, 
        patternWidth, patternHeight);
    const cells: CellType[] = [];
    pattern.forEach(row =>{
        let cx = x;
        for(let i=0;i<row.length;i++){
            if(row[i]==="X"){
                cells.push({x:cx, y})
            }
            cx++;
        }
        y++;
    });
    return cells;
};

export default pastePattern;