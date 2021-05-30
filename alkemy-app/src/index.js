import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Navbar, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OperacionesComponent from "./components/operaciones";
import BalanceComponent from "./components/balance";
import NewOperationComponent from './components/newOperation'

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
    return (<div id="divMain">
        <div className="container" id="balance">
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
  constructor ()
  {
    super()
    this.filtroRef = React.createRef();
  }
  render() {
    return (
      <div className="container" id="abmBody">
        <NewOperationComponent></NewOperationComponent>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Filtrar por:</Form.Label>
          <Form.Control as="select" ref = {this.filtroRef}>
            <option>Ingreso</option>
            <option>Egreso</option>
          </Form.Control>
          <Button >Prueba</Button>
        </Form.Group>
        <OperacionesComponent filtro = {this.filtroRef}></OperacionesComponent>
      </div>
    );
  }

  
}



ReactDOM.render(<App />, document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
