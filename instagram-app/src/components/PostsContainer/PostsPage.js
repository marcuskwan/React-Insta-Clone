import React from "react";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
  state = {};
  render() {
    return (
      <div className="posts-page">
        {this.props.postsDataArray.map(postObject => (
          <div key={postObject.id} className="post-container">
            <PostContainer key={postObject.id} postObject={postObject} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostsPage;
