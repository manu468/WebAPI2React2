import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import '../Employee/AddEmployee.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap'; 
class PostEmployee extends React.Component{
    constructor(props) {  
        super(props);  
        this.state={
            EmployeeId:'',
            EmployeeName:'',
            EmployeeSalary:'',
            EmployeeAddress:'',
            DeptId:''
        }
        }
        

        PostEmployee=()=>{
            axios.post("http://localhost:61020/api/Employees",{/*EmployeeId:this.state.EmployeeId,*/
            EmployeeName:this.state.EmployeeName,
            EmployeeSalary:this.state.EmployeeSalary,
            EmployeeAddress:this.state.EmployeeAddress,
            DeptId:this.state.DeptId })
        }
        handleChange= (e)=> {  
            this.setState({[e.target.name]:e.target.value});  
            }  
            onSubmit(e){
              e.preventDefault();
            }
               
            render() {  
            return (  
               <Container className="App">  
                <h4 className="PageHeading">Enter Employee Information</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                  <Col>  
                    <FormGroup row>  
                      <Label for="name" sm={2}>Name:</Label>  
                      <Col sm={10}>  
                        <Input type="text" name="EmployeeName" onChange={this.handleChange} value={this.state.EmployeeName} placeholder="Enter Name" />  
                      </Col>  
                    </FormGroup>  
                    <FormGroup row>  
          <Label for="EmployeeSalary" sm={2}>Employee Salary:</Label>  
          <Col sm={10}>  
            <Input type="text" name="EmployeeSalary" onChange={this.handleChange} value={this.state.EmployeeSalary} placeholder="Enter Employee Salary" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="EmployeeAddress" sm={2}>Employee Address:</Label>  
          <Col sm={10}>  
            <Input type="text" name="EmployeeAddress" onChange={this.handleChange} value={this.state.EmployeeAddress} placeholder="Enter Employee Address" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="DeptId" sm={2}>Department Id:</Label>  
          <Col sm={10}>  
            <Input type="text" name="DeptId" onChange={this.handleChange} value={this.state.DeptId} placeholder="Enter Department id" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}> 
        
          <button type="button"  onClick={this.PostEmployee} className="btn btn-success">Submit</button>  
        
           </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
          
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
} 
// ReactDOM.render(  
//   <PostEmployee />,  
//   document.getElementById('root'));  
   
export default PostEmployee;  
   
