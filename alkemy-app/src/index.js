import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { Form, FormControl, Col, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Route path="/" exact>
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
        <Navbar.Brand href="#home">Alkemy Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
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
        <div>Hola</div>
        <div id="registrosMain">Mundo</div>
      </div>
    );
  }
}

class ABMBodyComponent extends React.Component
{
  render()
  {
    return(
      <div>
        <NewOperationModal />
      </div>
    );
  }
}
function NewOperationModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" size="lg" onClick={handleShow}>
        Nueva Operación
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Envíanos tu comentario!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Obligatorio" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Obligatorio" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Mail</Form.Label>
              <Form.Control type="email" placeholder="Obligatorio" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ingrese aquí su comentario:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
