import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PutEmployee from './Employee/EditEmployee';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import EmployeesList from './Employee/GetEmployee';
import PostEmployee from './Employee/AddEmployee';
//import './App.css'; 
//import 'bootstrap/dist/css/bootstrap-theme.css';


 
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddEmployee'} className="nav-link">AddEmployee</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/GetEmployee'} className="nav-link">Employee List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/AddEmployee' component={PostEmployee} />  
          <Route path='/EditEmployee/:id' component={PutEmployee} />  
          <Route path='/GetEmployee' component={EmployeesList} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
//export default App;  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//  );
//}

export default App;
