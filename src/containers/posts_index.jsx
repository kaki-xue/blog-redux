import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {setPosts} from '../actions'
import {Link} from "react-router-dom"


class PostsIndex extends Component {
  componentDidMount() {
  this.props.setPosts()
  }
  renderPosts() {
   return this.props.posts.map((post) => {
     return (
       <Link to={`/posts/${post.id}`} key={post.id}>
         <div className="post-item">
           <h3>{post.title}</h3>
           <p>{post.content}</p>
         </div>
       </Link>
     );
     });
   }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3> Blog </h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            lets's write a post
          </Link>
        </div>
        {this.renderPosts()}
      </div>
      );
  }
}
 function mapDispatchToProps(dispatch) {
      return bindActionCreators(
        {setPosts},
        dispatch
        );
    }

  function mapStateToProps(state) {
      return {
        posts: state.posts

      }
    }
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);


