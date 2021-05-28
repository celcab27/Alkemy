import React from "react";

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
         this.setState({ operaciones: operaciones });
       });
   }

  render() {
    if (this.state.operaciones.length > 0) {
      var operations = this.state.operaciones.map((operacion) => {
        return <li>{operacion.title_}</li>;
      });

      return (
        <div className="container">
          <h1>Lista</h1>
          {operations}
        </div>
      );
    } else {
      return <p className="text-center">Cargando empleados...</p>;
    }
  }
}

export default OperacionesComponent;
