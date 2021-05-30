import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  Col,
  FormControl,
} from "react-bootstrap";

class EditarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    //Fecha viene del SQL con la hora así que hay que cortar el string

    this.dateWithoutTime = this.props.date;
    this.dateWithoutTime = this.dateWithoutTime.substring(0, 10);

    this.titleEdit = React.createRef();
    this.amountEdit = React.createRef();
    this.dateEdit = React.createRef();
    this.categoryEdit = React.createRef();

  }

  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  actualizarOperacion() {
    var data = {
      user_id: "krezz",
      title: this.titleEdit.current.value,
      amount: this.amountEdit.current.value,
      date: this.dateEdit.current.value,
      category: this.categoryEdit.current.value,
      id: this.props.id,
    };

    console.log(data);
    var url = "http://localhost:5000/api/actualizar-operacion";

     sendData(url, data).then((data) => {
      console.log(data);
      this.handleModal();
     }
     );

     async function sendData(url, data)
     {
       const response = await fetch(url, {
       method: "POST", // *GET, POST, PUT, DELETE, etc.
       headers: {
         "Content-Type": "application/json",
       },
       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       body: JSON.stringify(data), // body data type must match "Content-Type" header
       
      });
      return response.json()

     }
  }
  render() {
    return (
      <div>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => this.handleModal()}
          id="newOperationButton"
        >
          Editar
        </Button>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Nueva Operación: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título:</Form.Label>
                <Form.Control type="text" ref = {this.titleEdit}  defaultValue={this.props.title} />
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
                    <Form.Control
                      type="number"
                      ref = {this.amountEdit}
                      defaultValue={this.props.amount}
                    />
                  </Col>
                  <Form.Text className="text-muted">
                    Por favor, ingrese solo la cantidad numérica.
                  </Form.Text>
                </Form.Row>
              </Form.Group>

              <FormGroup bsSize="large">
                <Form.Label>Fecha:</Form.Label>
                <FormControl type="date" ref = {this.dateEdit} defaultValue={this.dateWithoutTime} />
              </FormGroup>

              <FormGroup>
                <Form.Label>Categoría:</Form.Label>
                <Form.Control as="select" ref = {this.categoryEdit} defaultValue={this.props.category}>
                  <option>Elija una opción</option>
                  <option>Viaje</option>
                  <option>Comida</option>
                  <option>Salida</option>
                </Form.Control>
              </FormGroup>

              <FormGroup>
                <Form.Label>Tipo de Operación:</Form.Label>
                <Form.Control as="select" id="disabledSelect">
                  <option>{this.props.type}</option>
                </Form.Control>
              </FormGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.actualizarOperacion()}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditarComponent;
