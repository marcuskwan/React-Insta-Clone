import React from "react";
import CommentSection from "../CommentSection/CommentSection";
// importing PropTypes package
// import PropTypes from "prop-types";

class PostContainer extends React.Component {
  render() {
    return (
      <>
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
