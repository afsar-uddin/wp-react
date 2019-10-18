import React from 'react'
import {Link} from 'react-router-dom'
import renderHTML from 'react-render-html'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const PostList = (props) => {
    // console.log(props)
    const list = ({allPostList}) => { 
        if(allPostList) {
            return allPostList.map((item,i)=>{
                return (
                    <div className="single-post separator" key={i}>
                        <h3>{item.title.rendered}</h3>
                        {renderHTML(item.excerpt.rendered)} <Link key={item.id} to={`/single-post/${item.id}`}>Read more</Link>
                    </div>                            
                )
            })
        }
    }
    return (
        <div className="container post-list">
            <div className="row">
                <div className="col-md-12 text-center title">
                    <h2>Default Post</h2>
                </div>
            </div>
            <div className="row">
                <div className="12">
                    {list(props)}
                </div>
            </div>
        </div> 
    )
}

export default PostList;