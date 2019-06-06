import React from "react";
import CommentSection from "../CommentSection/CommentSection";
// importing PropTypes package
// import PropTypes from "prop-types";

class PostContainer extends React.Component {
  render() {
    return (
      <>
        <div className="poster-thumnail-username">
          <div className="poster-thumbnail">
            <img
              src={this.props.postObject.thumbnailUrl}
              alt="poster-thumbnail"
            />
          </div>
          <div className="poster-username">
            {this.props.postObject.username}
          </div>
        </div>
        <div className="poster-image">
          <img src={this.props.postObject.imageUrl} alt="poster-image" />
        </div>
        <div className="icons">
          <div className="heart-icon">Insert heart icon here</div>
          <div className="comment-icon">Insert comment icon here</div>
        </div>
        <div className="likes">{this.props.postObject.likes} likes</div>
        <CommentSection postCommentsArray={this.props.postObject.comments} />
      </>
    );
  }
}

// PostContainer.propTypes = {
//   postsDataArray: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       username: PropTypes.string.isRequired,
//       thumbnailUrl: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//       timestamp: PropTypes.string.isRequired,
//       comments: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.number.isRequired,
//           username: PropTypes.string.isRequired,
//           text: PropTypes.string.isRequired
//         })
//       )
//     })
//   )
// };

// PostContainer.propTypes = {
//   postObject: {}
// }

export default PostContainer;
