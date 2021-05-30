import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  Col,
  FormControl,
} from "react-bootstrap"; 

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
  
    handleModal() {
      this.setState({ showModal: !this.state.showModal });
    }
  
    sendOperation() {
      var titleHtml = this.title.current.value;
      var amountHtml = this.amount.current.value;
      var dateHtml = this.date.current.value;
      var categoryHtml = this.category.current.value;
      var typeHtml = this.type.current.value;
  
      var data = {
        user_id: "krezz",
        title: titleHtml,
        amount: amountHtml,
        date: dateHtml,
        category: categoryHtml,
        type: typeHtml,
      };
  
      var url = "http://localhost:5000/api/crear-operacion";
  
      postData(url, data).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        this.handleModal();
      });

      async function postData(url, data) {
        console.log(data);
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
    }
    render() {
      return (
        <div>
          <Button
            variant="dark"
            size="lg"
            onClick={() => this.handleModal()}
            id="newOperationButton"
          >
            Nueva Operación
          </Button>
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Nueva Operación: </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Título:</Form.Label>
                  <Form.Control type="text" ref={this.title} />
                  <Form.Text className="text-muted">
                    Por favor, seleccione un nombre con el que desee visualizar la
                    operación.
                  </Form.Text>
                </Form.Group>
  
                <Form.Group>
                  <Form.Row>
                    <Col>
                      <span>Monto de dinero: </span>
                    </Col>
                    <Col>
                      <Form.Control type="number" ref={this.amount} />
                    </Col>
                    <Form.Text className="text-muted">
                      Por favor, ingrese solo la cantidad numérica.
                    </Form.Text>
                  </Form.Row>
                </Form.Group>
  
                <FormGroup bsSize="large">
                  <Form.Label>Fecha:</Form.Label>
                  <FormControl type="date" ref={this.date} />
                </FormGroup>
  
                <FormGroup>
                  <Form.Label>Categoría:</Form.Label>
                  <Form.Control as="select" ref={this.category}>
                    <option>Elija una opción</option>
                    <option>Viaje</option>
                    <option>Comida</option>
                    <option>Salida</option>
                  </Form.Control>
                </FormGroup>
  
                <FormGroup>
                  <Form.Label>Tipo de Operación:</Form.Label>
                  <Form.Control as="select" ref={this.type}>
                    <option>Elija una opción</option>
                    <option>Ingreso</option>
                    <option>Egreso</option>
                  </Form.Control>
                </FormGroup>
              </Form>
            </Modal.Body>
  
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleModal()}>
                Close
              </Button>
              <Button variant="primary" onClick={() => this.sendOperation()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

  export default NewOperationComponent;