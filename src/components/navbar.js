import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'


class Navbar extends Component {
  render() {
    return (
        <Container>
            <ul className="ul-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/comments-info">Comments Info</Link></li>
            </ul>
        </Container> 
    );
  }
}

export default Navbar;
