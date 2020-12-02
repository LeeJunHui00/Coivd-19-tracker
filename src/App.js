import React from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Lets build a Covid 19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="Worldwide">Worldwide</MenuItem>
          <MenuItem value="Worldwide">option 2</MenuItem>
          <MenuItem value="Worldwide">option 3</MenuItem>
          <MenuItem value="Worldwide">option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;

// 1.02.42
