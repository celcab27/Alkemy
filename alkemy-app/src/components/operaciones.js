import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

class OperacionesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operaciones: [] };
  }

  
  componentWillMount() {
    fetch("http://localhost:5000/api/operaciones")
      .then((response) => {
        return response.json();
      })
      .then((operaciones) => {
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
    if (this.state.operaciones.length > 0) {
      var operations = this.state.operaciones.map((operacion) => {
        //Sql lo trae como fecha y hora así que tengo que cortar el string antes de mostrarlos
        var operationDate = operacion.date_.substring(0, 10);

        console.log(localStorage.getItem('balance'));
        return (
          <Card bg="secondary" text="white" className="card">
            <Card.Header>{operacion.title_}</Card.Header>
            <Card.Body>
              <Card.Title>
                Monto: ${operacion.amount_} ({operacion.type_})
              </Card.Title>
              <Card.Text>
                Fecha: {operationDate} <br />
                Categoría: {operacion.category_}
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
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
