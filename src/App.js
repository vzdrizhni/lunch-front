import React from 'react'

import Navbar from './pages/navbar/navbar';
import Menu from './components/Menu/menus'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
          <Route exact path='/' component={Menu}/>
      </Switch>
    </div>
  );
}

export default App;
