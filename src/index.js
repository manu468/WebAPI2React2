import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmployeesList from './Employee/GetEmployee';
import PutEmployee from './Employee/EditEmployee';
import PostEmployee from './Employee/AddEmployee';
import * as serviceWorker from './serviceWorker';
import App from './App';

//ReactDOM.render(<EmployeesList />, document.getElementById('root'));
//ReactDOM.render(<PostEmployee />, document.getElementById('root'));
//ReactDOM.render(<PutEmployee />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
