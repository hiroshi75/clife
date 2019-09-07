import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Field from "./components/Field"
import ContrtolButtons from "./components/ContrtolButtons"

import './App.css';
import PatternSelector from './components/PatternSelector';
import { useDispatch } from 'react-redux';
import { onScreenSizeChanged, onSendPlayCommand } from './actions';
import { getWindowSize } from './utils/sizeLib';



function App() {

  const dispatch = useDispatch()
  useEffect(()=>{

    const handler = ()=>{
      const {x, y} = getWindowSize();
      dispatch(onSendPlayCommand(false));
      dispatch(onScreenSizeChanged(x, y));
    };
    
    window.addEventListener("resize",handler);
    window.addEventListener("gesturestart", handler);
    return ()=>{window.removeEventListener("resize", handler); }
  }, [])

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
