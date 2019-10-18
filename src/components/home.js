import React, {Component} from 'react'
import Navbar from '../components/navbar'
import PostList from '../components/post'

const POST_URL = "http://wp-react-bs.afsarbd.com/wp-json/wp/v2/posts"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: ' '
        }
    }

    componentDidMount() {
        fetch(POST_URL,{
            method: "GET"
        })
        .then(response=>response.json())
        .then(json=> {
            this.setState({
                post: json
            })
        })
    }


    render() {
        return(
            <div>
                <Navbar />
                <PostList allPostList={this.state.post} />
            </div>
        )
    }
}

export default Home;