import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Card } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <div class="columns">
          <div class="column is-half">
          <Nav.Link href="/home">Home</Nav.Link>
          </div>
          <div class="column is-half">
          <Nav.Link href="/cart">Cart List</Nav.Link>
          </div>
          <div class="column is-half">
          <Nav.Link href="/add">Add Item</Nav.Link>
          </div>
          </div>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;