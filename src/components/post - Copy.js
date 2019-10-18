import React, { Component } from 'react'
import renderHTML from 'react-render-html'
import { BrowserRouter, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'

import Navbar from '../components/navbar'

class PostList extends Component {
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
        <Row>
            <Col md="12 text-center title">
            <h2>Default wp elements</h2>
            </Col>
        </Row>
        <Row> 
          <Col md="12">
            {this.state.data.map((item)=>
                <div className="single-post separator">
                    <h3><strong>Title: </strong>{renderHTML(item.title.rendered)}</h3>
                    <strong>Excerpt: </strong> {renderHTML(item.excerpt.rendered)} <Link key={item.id} to={`/single-post/${item.id}`}>Read more</Link>
                </div>
            )}
          </Col> 
        </Row> 
    </Container>
    );
  }
}

export default PostList;