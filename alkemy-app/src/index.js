import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useState, render } from "react";
import { Form, FormControl, Col, Modal, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OperacionesComponent from "./components/operaciones";
import BalanceComponent from './components/balance';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ABM">
          <NavbarComponent></NavbarComponent>
          <ABMBodyComponent></ABMBodyComponent>
        </Route>
      </Switch>
      <Switch>
        <Route path="/home" exact>
          <NavbarComponent> </NavbarComponent>
          <MainBodyComponent> </MainBodyComponent>
        </Route>
      </Switch>
    </Router>
  );
}

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Alkemy Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Link className="nav-link" to="/ABM">
              ABM
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class MainBodyComponent extends React.Component {
  render() {
    return (
      <div id="divMain">
        <div className="container"id="balance">
         <BalanceComponent></BalanceComponent> 
         </div>
        <div className="container" id="registrosMain">
          <OperacionesComponent></OperacionesComponent>
        </div>
      </div>
    );
  }
}

class ABMBodyComponent extends React.Component {
  render() {
    return (
      <div className="container" id="abmBody">
        <NewOperationComponent></NewOperationComponent>
        <OperacionesComponent></OperacionesComponent>
      </div>
    );
  }
}

class NewOperationComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.title = React.createRef();
    this.amount = React.createRef(); 
    this.date = React.createRef(); 
    this.category = React.createRef(); 
    this.type = React.createRef(); 

  }

  handleModal()
  {
    this.setState({showModal: !this.state.showModal});
  }

  sendOperation()
  {
    var titleHtml = this.title.current.value;
    var amountHtml = this.amount.current.value;
    var dateHtml = this.date.current.value;
    var categoryHtml = this.category.current.value;
    var typeHtml = this.type.current.value;

    var data = {
      user_id: 'krezz',
      title: titleHtml,
      amount: amountHtml,
      date: dateHtml,
      category: categoryHtml,
      type: typeHtml
    }

    var url = 'http://localhost:5000/api/crear-operacion';

    postData(url, data)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  }
  render() {
    return (
      <div>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => this.handleModal()}
          id="newOperationButton">
          Nueva Operación
        </Button>
        <Modal show= {this.state.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva Operación: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título:</Form.Label>
                <Form.Control type="text" ref = {this.title}/>
                <Form.Text className="text-muted">
                  Por favor, seleccione un nombre con el que desee visualizar la
                  operación.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col>
                    <span>$</span>
                  </Col>
                  <Col>
                    <Form.Control type="number" ref ={this.amount}/>
                  </Col>
                </Form.Row>
              </Form.Group>

              <FormGroup  bsSize="large">
                <Form.Label>Fecha:</Form.Label>
                <FormControl type="date" ref={this.date}  />
              </FormGroup>

              <FormGroup>
                <Form.Label>Categoría:</Form.Label>
                <Form.Control as="select" ref = {this.category}>
                  <option>Elija una opción</option>
                  <option>Viaje</option>
                  <option>Comida</option>
                  <option>Salida</option>

                </Form.Control>
              </FormGroup>

              <FormGroup>
                <Form.Label>Tipo de Operación:</Form.Label>
                <Form.Control as="select" ref = {this.type}>
                  <option>Elija una opción</option>
                  <option>Ingreso</option>
                  <option>Egreso</option>

                </Form.Control>
              </FormGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>Close</Button>
            <Button variant="primary" onClick={() => this.sendOperation()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));


if (window.location == "http://localhost:3000/ABM") {

}

async function postData(url, data) {
  console.log(data);
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
