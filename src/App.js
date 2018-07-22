import React, { Component } from 'react';
import './App.css';
import Header from "./views/header/header";
import {Provider} from "react-redux";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Graph from "./views/graph/graph";

class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
              <div>
                  <Header/>
                  <Route exact path={'/graph'} component={Graph}/>
                  <Route exact path={'/prime'} component={Graph}/>
              </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
