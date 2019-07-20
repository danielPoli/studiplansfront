import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';


function App() {
  return (
    <BrowserRouter>
    <CssBaseline/>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
