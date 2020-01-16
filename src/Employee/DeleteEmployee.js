import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteEmployee= () =>{  
     axios.delete('http://localhost:61020/api/Employees/?id='+this.props.obj.EmployeeId)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.EmployeeName}  
          </td>  
          <td>  
            {this.props.obj.EmployeeSalary}  
          </td>  
          <td>  
            {this.props.obj.EmployeeAddress}  
          </td>  
          <td>  
            {this.props.obj.DeptId}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.EmployeeId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  