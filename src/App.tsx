import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
 isBrowser
} from "react-device-detect";

import Field from "./components/Field"
import ContrtolButtons from "./components/ContrtolButtons"

import './App.css';
import PatternSelector from './components/PatternSelector';
import { useSelector, useDispatch } from 'react-redux';
import { onScreenSizeChanged } from './actions';
import {StoreState} from './reducers';
import getGridsize from './utils/GetGridSize';
import { RECT_SIZE } from './types';



function App() {

  const dispatch = useDispatch()
  const appState = useSelector((state: StoreState) => {
    return state.app;
  })

  useEffect(()=>{
      dispatch(onScreenSizeChanged(appState.windowX, appState.windowY));

    const handler = ()=>{
      const {x,y} = getGridsize(appState.windowX, appState.windowY);
      dispatch(onScreenSizeChanged(x,y));
    };
    
    window.addEventListener("resize",handler);
    return ()=>{window.removeEventListener("resize", handler); }
  }, [])
  
  const {x,y} = getGridsize(appState.windowX, appState.windowY);
  
  return (
    <div>
    <Grid container alignItems='center' spacing={1}>
      <Grid item>
        <img src="gameoflife_mini.png" width="145" height="50" alt="Game of Life"/>
      </Grid>
      <Grid item>
        <ContrtolButtons/>
      </Grid>
      <Grid item>
        <Typography>Paste pattern: </Typography>
      </Grid>
      <Grid item>
        <PatternSelector/>
      </Grid>
    </Grid>
    <Field />
    </div>
  );
}

export default App;
