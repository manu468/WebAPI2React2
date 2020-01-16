import React from 'react';
import axios from 'axios';
import '../App.css';
import Table from './DeleteEmployee';
import ReactDOM from 'react-dom';
//import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
export default class EmployeesList extends React.Component {  

    constructor(props) {  
        super(props);  
        this.state = {business: []};  
      }  
      componentDidMount(){  
        debugger;  
        axios.get('http://localhost:61020/api/Employees')  
          .then(response => {  
            this.setState({ business: response.data });  
            debugger;  
    
          })  
          .catch(function (error) {  
            console.log(error);  
          })  
      }  
        
      tabRow(){  
        return this.state.business.map(function(object, i){  
            console.log(object,i);
            return <Table obj={object} key={i} />;  
            
        });  
      }  
    
      render() {  
        return (  
          <div>  
            <h4 align="center">Employee List</h4>  
            <table className="table table-striped" style={{ marginTop: 10 }}>  
              <thead>  
                <tr>  
                   <th>EmployeeId</th>  
                  <th>EmployeeName</th>  
                  <th>EmpSal</th>  
                   <th>EmpAddress</th> 
                  <th>DeptId</th>  
                  <th colSpan="6">Action</th>  
                </tr>  
              </thead>  
              <tbody>  
               { this.tabRow() }                
              </tbody>  
            </table>  
          </div>  
        );  
      }  
    }  




   // ----------------------- starts here-----------------
    // constructor() {  
    //     super();  
    //     this.state = {  
    //         EmployeeData: []  
    //     }  
    // }  
  
//     componentDidMount() {  
//         axios.get("http://localhost:61020/api/Employees").then(response => {  
//             //console.log(response.data);  
//             this.setState({  
//                 EmployeeData: response.data  
//             });  
//         });  
//     }  
  
//     render() {  
    
//         return (  
//             <section >  
//                   <div class="container text-center">
//                 <h1  class ="display-4">Employees List</h1>  
//                 <div class="container-fluid">
//                     <table class="table table-hover text-centered table-striped">  
//                         <thead class="lead thead-light"><tr><th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th><th>Dept Id</th></tr></thead>  
//                         <tbody>  
//                             {  
//                                 this.state.EmployeeData.map((p, index) => {  
//                                 return <tr key={index}><td>{p.EmployeeId}</td><td> {p.EmployeeName}</td><td>{p.EmpSal}</td><td>{p.DeptId}</td></tr>;  
//                                 })  
//                             }  
//                         </tbody>  
//                     </table>  
//                 </div>  
//                 </div>
//                             </section>  
//         )
//     }  
// }  
  
// ReactDOM.render(  
//     <EmployeesList />,  
//     document.getElementById('root'));
//-------------------- ends here ----------------------------   
   // export default EmployeesList;