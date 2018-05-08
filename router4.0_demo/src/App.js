import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Routers from './router/router'

class App extends Component {
  render (){
    return(
      <Router>
        <div>
          <div>
            <ul>
              <li>
                <Link to='/acomponent'>a</Link>
              </li>
              <li>
                <Link to='/hello'>h</Link>
              </li>
              <li>
                <Link to='/children'>c</Link>
              </li>
            </ul>
          </div>
          <Routers/>
        </div>
      </Router>
    )
  } 

}

export default App;
