import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Field from "./components/Field"
import ContrtolButtons from "./components/ContrtolButtons"

import './App.css';
import PatternSelector from './components/PatternSelector';

function App() {
  const gridx=150;
  const gridy=100;

  return (
    <div>
    <Grid container alignItems='center' spacing={1}>
      <Grid item>
        <img src="gameoflife_mini.png" width="145" height="50"/>
      </Grid>
      <Grid item>
        <ContrtolButtons gridx={gridx} gridy={gridy}/>
      </Grid>
      <Grid item>
        <Typography>Paste pattern: </Typography>
      </Grid>
      <Grid item>
        <PatternSelector/>
      </Grid>
    </Grid>
    <Field gridx={gridx} gridy={gridy} rectSize={7}/>
    </div>
  );
}

export default App;
