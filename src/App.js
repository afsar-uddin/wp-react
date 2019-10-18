import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// COMPONENTS
import Home from './components/home'
import Navbar from './components/navbar'
import Search from './components/search'
import Categories from './components/categories'
import Comments from './components/comments'
import SinglePost from './components/single-post'

class App extends Component {
  render() {
    return ( 
           
      <Router> 
        <div> 
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/comments-info" component={Comments} />
          <Route exact path="/single-post" component={SinglePost} />
        </div>
      </Router>
    );
  }
}

export default App;
