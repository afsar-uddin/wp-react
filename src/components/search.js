import React, { Component } from 'react'
import renderHTML from 'react-render-html'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'

import Navbar from '../components/navbar'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
      }

      componentDidMount() {
        return fetch (`http://wp-react-bs.afsarbd.com/wp-json/wp/v2/posts`)
         .then((response) => response.json())
         .then((responseJson) => {
             this.setState({ data: responseJson })
         })
         .catch((error) => {
             console.error(error);
         });
    }

  render() {
    return (
        
      <Container>
        <div>
            <Navbar />
        </div>
        <Row>
            <Col md="12 text-center title">
            <h2>Search</h2>
            </Col>
        </Row>
        <Row> 
          <Col md="12">
            Search shows here
          </Col> 
        </Row> 
    </Container>
    );
  }
}

export default Search;
