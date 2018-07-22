import React, { Component } from 'react';
import './App.css';
import Header from "./views/header/header";
import {Provider} from "react-redux";
import {Route, BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
              <div>
                  <Header/>
              </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
