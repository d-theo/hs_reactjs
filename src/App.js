import React, { Component } from 'react';
import './App.css';
import Header from "./views/header/header";
import {Provider} from "react-redux";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Graph from "./views/graph/graph";
import Prime from "./views/prime/prime";
import Music from "./views/music/music";

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
          <Router>
              <div>
                  <Header/>
                  <Route exact path={'/music'} component={Music}/>
                  <Route exact path={'/graph'} component={Graph}/>
                  <Route exact path={'/prime'} component={Prime}/>
              </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
