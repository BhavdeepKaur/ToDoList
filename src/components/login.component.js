import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUser = this.onChangeUser.bind(this);
        
        this.onChangePass = this.onChangePass.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          user: '',
          
          pass: ''
        }
      }
    
      onChangeUser(e) {
        this.setState({user: e.target.value})
      }
    
      onChangePass(e) {
        this.setState({pass: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const UserObject = {
          user: this.state.user,
          pass: this.state.pass
        };
        axios.post('http://localhost:4000/users/login', UserObject)
            .then(res => console.log(res.data));
    
        this.setState({user: '',pass: ''})
    }

    render() 
    {return (<div className="form-wrapper col-12 col-md-9">
    <Form onSubmit={this.onSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter name..." value={this.state.name} onChange={this.onChangeUser} />
        </Form.Group>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.pass} onChange={this.onChangePass}/>
        </Form.Group>

      </Form.Row>

      <Button variant="danger" size="lg" block="block" type="submit">
      Create User
      </Button>
    </Form>
    </div>);
  }
}