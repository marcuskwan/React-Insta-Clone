import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <>
      <div className="username">{props.commentObj.username}</div>
      <div className="text">{props.commentObj.text}</div>
    </>
  );
};

Comment.propTypes = {
  commentObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
