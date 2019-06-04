import React from "react";
// import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <>
      <div className="comment-section">
        <div className="username">{props.postCommentsArray.username}</div>
        <div className="text">{props.postCommentsArray.text}</div>
      </div>
    </>
  );
};

// CommentSection.propTypes = {
//   postComments: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       username: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired
//     })
//   )
// };

export default CommentSection;
