import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateToDo from "./components/create-todo.component";
import EditToDo from "./components/edit-todo.component";
import ToDoList from "./components/todo-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <div class="container">

            <Navbar.Brand>
              <Link to={"/create-todo"} className="nav-link">
                Task Management To-do list
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-todo"} className="nav-link">
                  Create ToDo
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-todo/:id"} className="nav-link">
                  Edit ToDo
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/todo-list"} className="nav-link">
                  ToDo List
                </Link>
              </Nav>
            </Nav>

          </div>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateToDo} />
                <Route path="/create-todo" component={CreateToDo} />
                <Route path="/edit-todo/:id" component={EditToDo} />
                <Route path="/todo-list" component={ToDoList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;