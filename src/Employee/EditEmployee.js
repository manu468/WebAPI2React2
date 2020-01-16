import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

class PutEmployee extends React.Component{

    constructor(props) {  
        super(props)  
     
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);  
    this.onChangeEmployeeSalary = this.onChangeEmployeeSalary.bind(this);  
    this.onChangeEmployeeAddress = this.onChangeEmployeeAddress.bind(this);  
    this.onChangeDeptId = this.onChangeDeptId.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
         // EmployeeId:
            EmployeeName: '',  
            EmployeeSalary: '',  
            EmployeeAddress: '',  
            DeptId: ''  
         }
        }
        componentDidMount(){
            axios.get("http://localhost:61020/api/Employees/15")
           // axios.get("http://localhost:61020/api/Employees/id="+this.props.match.params.EmployeeId)
            .then(response=>{this.setState({
                EmployeeName: response.data.EmployeeName,   
                EmployeeSalary: response.data.EmployeeSalary,  
                EmployeeAddress: response.data.EmployeeAddress,  
                DeptId: response.data.DeptId });  
  
            })
        }
            
        onChangeEmployeeName(e) {  
            this.setState({  
                EmployeeName: e.target.value  
            });  
          }  
          onChangeEmployeeSalary(e) {  
            this.setState({  
                EmployeeSalary: e.target.value  
            });    
          }  
          onChangeEmployeeAddress(e) {  
            this.setState({  
                EmployeeAddress: e.target.value  
            });  
        }  
            onChangeDeptId(e) {  
                this.setState({  
                    DeptId: e.target.value  
                });  
          }  
          onSubmit(e) {  
            debugger;  
            e.preventDefault();  
            const obj = {   EmployeeId:15,  
                // EmployeeId:this.props.match.params.EmployeeId,  
              EmployeeName: this.state.EmployeeName,  
              EmployeeSalary: this.state.EmployeeSalary,  
              EmployeeAddress: this.state.EmployeeAddress ,
              DeptId: this.state.DeptId,   
          
            };  
            axios.post('http://localhost:61020/api/Employees/15', obj)
            //axios.post('http://localhost:61020/api/Employees/id='+this.props.match.params.id, obj)  
            .then(res => console.log(res.data));  
            debugger;  
            this.props.history.push('/GetEmployee') 
        }
        render() {  
            return (  
                <Container className="App">  
      
                 <h4 className="PageHeading">Update Employee Informations</h4>  
                    <Form className="form" onSubmit={this.onSubmit}>  
                        <Col>  
                            <FormGroup row>  
                                <Label for="name" sm={2}>Employee Name</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="EmployeeName" value={this.state.EmployeeName} onChange={this.onChangeEmployeeName}  
                                    placeholder="Enter Name" />  
                                </Col>  
                            </FormGroup>  
                            <FormGroup row>  
                                <Label for="EmployeeSalary" sm={2}>Employee Salary</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="EmployeeSalary" value={this.state.EmployeeSalary} onChange={this.onChangeEmployeeSalary} placeholder="Enter Employee Salary" />  
                                </Col>  
                            </FormGroup>  
                             <FormGroup row>  
                                <Label for="EmployeeAddress" sm={2}>Employee Address</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="EmployeeAddress" value={this.state.EmployeeAddress} onChange={this.onChangeEmployeeAddress} placeholder="Enter Employee Address" />  
                                </Col>  
                            </FormGroup>  
                             <FormGroup row>  
                                <Label for="DeptId" sm={2}>Address</Label>  
                                <Col sm={10}>  
                                    <Input type="text" name="DeptId"value={this.state.DeptId} onChange={this.onChangeDeptId} placeholder="Enter Department Id" />  
                                </Col>  
                            </FormGroup>   
                        </Col>  
                        <Col>  
                            <FormGroup row>  
                                <Col sm={5}>  
                                </Col>  
                                <Col sm={1}>  
                              <Button type="submit" color="success">Submit</Button>{' '}  
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


export default PutEmployee;