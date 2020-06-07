import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ToDoTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteToDo = this.deleteToDo.bind(this);
    }

    deleteToDo() {
        axios.delete('http://localhost:4000/todos/delete-todo/' + this.props.obj._id)
            .then((res) => {
                console.log('ToDo Task successfully deleted!')
            }).catch((error) => {
                console.log(error)
            });
        window.location.reload(false);
    }

    render() {
        {/*if(this.props.obj.label=="Work"){*/}
        return (
            <tr>
                <td>{this.props.obj.task}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.label}</td>
                <td>{this.props.obj.status}</td>
                <td>
                    <Link className="edit-link" to={"/edit-todo/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteToDo} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
    /*else
        {return(<tr></tr>);}
   }*/

}