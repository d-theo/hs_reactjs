import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {app} from "./redux/app.reducer";
import {createStore} from "redux";

const store = createStore(app);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
