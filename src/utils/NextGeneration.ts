
const BIRTH_NUM = 3;
const SURVIVE_NUM=2;

type GridNumMap = {[n:number]:
    {[n:number]:number}
};

type Cells = {x:number,y:number}[];


const addAdjacent=(adjacentCount: GridNumMap, x: number, y: number): void =>{
    const cy = adjacentCount[x] || {};
    cy[y] = (cy[y] || 0) + 1;
    adjacentCount[x] = cy;
};

const nextGeneration = (cells:Cells, gridSize: {x:number,y:number}): Cells=>{
    const adjacentCount: GridNumMap = {};
    const currentCellIndex: GridNumMap = {};
    for(let {x,y} of cells){
        const cy = (currentCellIndex[x] || {});
        cy[y] = 1;
        currentCellIndex[x] = cy;

        for(let xi=Math.max(x-1,0);xi<=Math.min(x+1, gridSize.x-1);xi++){
            for(let yi=Math.max(y-1,0);yi<=Math.min(y+1, gridSize.y-1);yi++){
                if(x!==xi || y!==yi){
                    addAdjacent(adjacentCount, xi, yi);
                }
            }
        }
    }
    const newCells:Cells = [];
    for(let sx in adjacentCount){
        for(let sy in adjacentCount[sx]){
            const c = adjacentCount[sx][sy];
            const x = parseInt(sx);
            const y = parseInt(sy);
            if(c===BIRTH_NUM){
                newCells.push({x, y});
            }else if(c===SURVIVE_NUM && currentCellIndex[x] && currentCellIndex[x][y]){
                newCells.push({x, y});
            }
        }
    }
    return newCells;
};

export default nextGeneration;