import { isBrowser } from "react-device-detect";
import { RECT_SIZE } from "../types";


export type WindowSize =  { x: number; y: number; };

export const getWindowSize = (): WindowSize=>({
  x: document.documentElement.clientWidth,
  y: document.documentElement.clientHeight
});

export const getFieldSize = ({ x, y }: WindowSize) => {
  if(isBrowser){
    return {x: x-26, y:y-80};
  }else{
    return {x: x-16, y:y-100};
  }
};

export const getGridSize = ({ x, y }: WindowSize) =>{
  const fiesdSize = getFieldSize({ x, y });
  return {
    gridx: Math.ceil(fiesdSize.x/RECT_SIZE), 
    gridy: Math.ceil(fiesdSize.y/RECT_SIZE),
    width: fiesdSize.x, height: fiesdSize.y
  };
};

export const getCurrentGridSize = ()=>{
  return getGridSize(getFieldSize(getWindowSize()));
};

export default getGridSize;
