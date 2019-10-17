import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Cart extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    fetch("/list")
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data });
        console.log(this.state.items);
      })
      .catch(console.log);
  }

  render() {
    return (
      <Card border="info">
        <Card.Header>Cart List:</Card.Header>
        <div className="col-xs-15">
          {this.state.items.map(item => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><b>{item.name}</b></h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {<span>Description: {item.description}</span>}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {<span>Price: ${item.price}</span>}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {<span>Quantity: {item.amount}</span>}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }
}

export default Cart;