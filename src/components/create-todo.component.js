import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import axios from 'axios';

export default class CreateToDo extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLabel = this.onChangeLabel.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      task: '',
      date: '',
      label: '',
      status: ''
    }
  }

  onChangeTask(e) {
    this.setState({task: e.target.value})
  }

  onChangeDate(e) {
    this.setState({date: e.target.value})
  }

  onChangeLabel(e) {
    this.setState({label: e.target.value})
  }

  onChangeStatus(e) {
    this.setState({status: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const ToDoObject = {
      task: this.state.task,
      date: this.state.date,
      label: this.state.label,
      status: this.state.status
    };
    axios.post('http://localhost:4000/todos/create-todo', ToDoObject)
      .then(res => console.log(res.data));

    this.setState({task: '', date: '', label: '', status: ''})
  }

  render() {return (<div className="form-wrapper col-12 col-md-9">
    <Form onSubmit={this.onSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>ToDo Task</Form.Label>
          <Form.Control type="text" placeholder="Enter task..." value={this.state.task} onChange={this.onChangeTask} />
        </Form.Group>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeDate}/>
        </Form.Group>

        <Form.Group as={Col} controlId="Name">
          <Form.Label>Label</Form.Label>
          <Form.Control as="select" defaultValue="Choose..." value={this.state.label} onChange={this.onChangeLabel}>
            <option>Choose...</option>
            <option>Personal</option>
            <option>Work</option>
            <option>Shopping</option>
            <option>Others</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="Name">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" defaultValue="Choose..." value={this.state.status} onChange={this.onChangeStatus}>
            <option>Choose...</option>
            <option>New</option>
            <option>In Progress</option>
            <option>Completed</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="danger" size="lg" block="block" type="submit">
      Create ToDo Task
      </Button>
    </Form>
    </div>);
  }
}