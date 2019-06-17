import React from "react";
// importing CommentSection
import CommentSection from "../CommentSection/CommentSection";
// importing FontAwesomeIcon package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importing FA Heart transparent icon and FA Comment transparent icon
import {
  faHeart as farHeart,
  faComment
} from "@fortawesome/free-regular-svg-icons";
// importing FA Heart solid icon
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
// importing styled components
import { PosterThumbnail, Icons } from "./postsStyling";

class PostContainer extends React.Component {
  state = {
    postObjectData: this.props.postObject,
    isLiked: false,
    likes: this.props.postObject.likes
  };

  handleLikesChanges = event => {
    event.preventDefault();
    // if (this.state.isLiked) {
    //   this.setState(previousState => {
    //     return {
    //       ...previousState,
    //       isLiked: !previousState.isLiked,
    //       likes: previousState.likes - 1
    //     };
    //   });
    // } else {
    //   this.setState(previousState => {
    //     return {
    //       ...previousState,
    //       isLiked: !previousState.isLiked,
    //       likes: previousState.likes + 1
    //     };
    //   });
    // }
    this.setState(previousState => {
      return {
        postObjectData: this.props.postObject,
        isLiked: !previousState.isLiked,
        likes: previousState.isLiked
          ? previousState.likes - 1
          : previousState.likes + 1
      };
    });
  };

  render() {
    return (
      <>
        <div className="poster-thumbnail-username">
          <PosterThumbnail>
            <img
              src={this.state.postObjectData.thumbnailUrl}
              alt="poster-thumbnail"
            />
          </PosterThumbnail>
          <div className="poster-username">
            {this.state.postObjectData.username}
          </div>
          <div className="poster-image">
            <img src={this.state.postObjectData.imageUrl} alt="main" />
          </div>
          <Icons>
            <div className="heart-icon">
              <FontAwesomeIcon
                className="far fa-heart"
                icon={this.state.isLiked ? fasHeart : farHeart}
                onClick={this.handleLikesChanges}
              />
            </div>
            <div className="comment-icon" />
            <FontAwesomeIcon className="far fa-comment" icon={faComment} />
          </Icons>
          <div className="likes">{this.state.likes} likes</div>
          <CommentSection
            postCommentsArray={this.state.postObjectData.comments}
          />
        </div>
      </>
    );
  }
}
export default PostContainer;

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
