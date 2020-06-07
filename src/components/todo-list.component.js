import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ToDoTableRow from './ToDoTableRow';

export default class ToDoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: [], lab: '', stat: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    alert("Label: " + this.state.lab + " Status: " + this.state.stat);
    e.preventDefault();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todos/')
      .then(res => {
        this.setState({
          todos: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.todos.map((res, i) => {
      
      return <ToDoTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="container">
    <div className="form-wrapper col-12 col-md-9">
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="Name">
            {/*<Form.Label>Label</Form.Label>*/}
            <Form.Control as="select" value="this.state.lab" onChange={this.handleInputChange} defaultValue=" " name="lab">
              <option>Label</option>
              <option>Personal</option>
              <option>Work</option>
              <option>Shopping</option>
              <option>Others</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="Name">
            {/*<Form.Label>Status</Form.Label>*/}
            <Form.Control as="select" value="this.state.stat" onChange={this.handleInputChange} defaultValue=" " name="stat">
              <option>Status</option>
              <option>New</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button variant="danger" onclick={this.DataTable} block="block" type="submit">
              Filter
            </Button>
          </Form.Group>

        </Form.Row>
      </Form>
    </div>  
    <div><br></br> </div>
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Label</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>
    </div>
    );
  }
}