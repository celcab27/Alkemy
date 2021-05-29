import OperacionesComponent from "./operaciones";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class BalanceComponent extends React.Component {

  constructor()
  {
      super();
      this.balance = '';
  }  
  componentWillMount()
  {
      this.balance = localStorage.getItem('balance');
  }
  render() {
    return(
      <div>
        <h1>Balance:</h1>
        <h3>${this.balance}</h3>
      </div>
    )
  }
}

export default BalanceComponent;
