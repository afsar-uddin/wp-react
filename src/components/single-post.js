import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'
import renderHTML from 'react-render-html'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Navbar from '../components/navbar'

const SINGLE_POST = "http://wp-react-bs.afsarbd.com/wp-json/wp/v2/posts";
class SinglePost extends Component {

    constructor (props) {
        super(props)
        this.state = {
            post: ''
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.postsid);
        fetch(`${SINGLE_POST}/?$_POSTId`, {
            mthod: 'GET'
        })
        .then(response=>response.json())
        .then(json=>{
            // console.log(json)
            this.setState({
                post:json
            })
        })
    }
 
  render() {
    return (
        <div className="container">
            <Navbar />
            <div className="row">
                <div className="col-md-12 text-center title">
                    <h2>Single post</h2>
                </div>
                <div>
                    <h3>
                        {this.state.post.title.rendered}
                    </h3>
                </div>
            </div>
        </div>
    )
  }
}

export default SinglePost;