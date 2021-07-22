import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import EditarComponent from './editar';


class OperacionesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operaciones: [] };
  }

  
  componentWillMount() {
    //Dejar localstorage el balance en 0 así solo se guarda el valor si es que carga
    localStorage.setItem('balance', 0);
    fetch("http://localhost:5000/api/operaciones")
      .then((response) => {
        return response.json();
      })
      .then((operaciones) => {
        operaciones = operaciones.reverse();
        if (window.location.href == "http://localhost:3000/ABM") {
          this.setState({ operaciones: operaciones });
        } else if (window.location.href == "http://localhost:3000/home") {
          var operationsBalance = []
          var indiceStart = operaciones.length - 10;
          for(let i = indiceStart; i < operaciones.length; i++)
          {
            if(operaciones[i])
            {
              operationsBalance.push(operaciones[i]);
            }
          }
          this.setState({operaciones: operationsBalance})
      }
      var balance = 0;
      for(let operacion of this.state.operaciones)
      {
        if(operacion.type_ == "Ingreso")
        {
          balance += operacion.amount_;
        }
        else
        {
          balance = balance - operacion.amount_;
        }
      }
      localStorage.setItem("balance", balance);
      });
  }


  render() {
    var operations = [];
  
    
    if (this.state.operaciones.length > 0) {
       operations = this.state.operaciones.map((operacion) => {
        //Sql lo trae como fecha y hora así que tengo que cortar el string antes de mostrarlos
        var operationDate = operacion.date_.substring(0, 10);

        console.log(localStorage.getItem('balance'));
        return (
          <Card bg="dark" text="white" className="card">
            <Card.Header >
              <h4> {operacion.title_} </h4>
              </Card.Header >
            <Card.Body>
              <Card.Title>
                Monto: ${operacion.amount_} ({operacion.type_})
              </Card.Title>
              <Card.Text>
                Fecha: {operationDate} <br />
                Categoría: {operacion.category_}
              </Card.Text>
              {/* <Button variant="outline-light">Editar</Button> */}
              <EditarComponent 
              title = {operacion.title_}
              amount = {operacion.amount_}
              date = {operacion.date_}
              category = {operacion.category_}
              type = {operacion.type_}
              id = {operacion.id_}
              ></EditarComponent>
            </Card.Body>
          </Card>
        );
      });

      return (
        <div className="container" id="card-container">
          {operations}
        </div>
      );
    } else {
      return <p className="text-center">Cargando empleados...</p>;
    }
  }
}

export default OperacionesComponent;
