import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      amount: "",
      price: ""
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/item/add",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      data: this.state
    });
  };

  render() {
    return (
      <Card border="info">
        <Card.Header>Add to Cart:</Card.Header>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name=""
              placeholder=" Name"
              id="name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name=""
              placeholder=" Description"
              id="description"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="text"
              name=""
              placeholder=" Price"
              id="price"
              value={this.state.price}
              onChange={e => this.setState({ price: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="text"
              name=""
              placeholder=" Quantity"
              id="amount"
              value={this.state.amount}
              onChange={e => this.setState({ amount: e.target.value })}
            />
          </Form.Group>
        </Form>

        <Card.Body>
          <Card.Text>
            <Button
              variant="primary"
              href="./label"
              onClick={e => this.handleFormSubmit(e)}
            >
              Add Item
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Add;