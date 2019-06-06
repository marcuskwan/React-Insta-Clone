import React from "react";
import CommentSection from "../CommentSection/CommentSection";
// importing PropTypes package
// import PropTypes from "prop-types";
// importing FontAwesomeIcon package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importing FA Heart transparent icon and FA Comment transparent icon
import {
  faHeart as farHeart,
  faComment
} from "@fortawesome/free-regular-svg-icons";
// importing FA Heart solid icon
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

class PostContainer extends React.Component {
  state = {
    postObjectData: this.props.postObject,
    isLiked: false,
    likes: this.props.postObject.likes
  };

  handleLikesChanges = event => {
    event.preventDefault();
    this.setState(previousState => {
      return {
        postObjectData: this.props.postObject,
        isLiked: !previousState.isLiked,
        likes: previousState.isLiked
          ? this.props.postObject.likes + 1
          : this.props.postObject.likes
      };
    });
  };

  render() {
    return (
      <>
        <div className="poster-thumbnail-username">
          <div className="poster-thumbnail">
            <img
              src={this.state.postObjectData.thumbnailUrl}
              alt="poster-thumbnail"
            />
          </div>
          <div className="poster-username">
            {this.state.postObjectData.username}
          </div>
        </div>
        <div className="poster-image">
          <img src={this.state.postObjectData.imageUrl} alt="main" />
        </div>
        <div className="icons">
          <div className="heart-icon">
            <FontAwesomeIcon
              className="far fa-heart"
              icon={farHeart}
              onClick={this.handleLikesChanges}
            />
            {/* onClick=className={fas - heart} */}
          </div>
          <div className="comment-icon" />
          <FontAwesomeIcon className="far fa-comment" icon={faComment} />
        </div>
        <div className="likes">{this.state.likes} likes</div>
        <CommentSection
          postCommentsArray={this.state.postObjectData.comments}
        />
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
