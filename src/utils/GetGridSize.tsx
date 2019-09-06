import { isBrowser } from "react-device-detect";
import { RECT_SIZE } from "../types";

const getGridsize = (windowX: number,windowY: number) =>{
    if(isBrowser){
      return {   
        x: Math.floor((windowX - 26) / RECT_SIZE),
        y: Math.floor((windowY - 80) / RECT_SIZE)
      };
    }else{
      return {   
        x: Math.floor((windowX - 16) / RECT_SIZE),
        y: Math.floor((windowY - 100) / RECT_SIZE)
      };
    }
  };

export default getGridsize;
