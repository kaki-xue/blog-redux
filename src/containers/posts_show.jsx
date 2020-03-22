import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions/index'
class PostsShow extends Component {
  componentDidMount() {
    if(!this.props.post) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }
  render() {
   // if(!this.props.post) {
   //  return <p> Loading ...</p>
   // }

   return (
     <div>
       <div className="post-item">
         <h3>
           {this.props.post.title}
         </h3>
         <p>
           {this.props.post.content}
         </p>`
       </div>
       <Link to="/">
         Back
       </Link>
     </div>
    );
  }
}

//ownProps is second parameter of mapStateToProps, means this component's props passed by route, match.params, order matters
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPost}, dispatch)
}
function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // from URL
  const post = state.posts.find(post => post.id === idFromUrl);// pure javascript
  return {post}  // { post: post}

}

export default connect(mapStateToProps, mapStateToProps)(PostsShow)
