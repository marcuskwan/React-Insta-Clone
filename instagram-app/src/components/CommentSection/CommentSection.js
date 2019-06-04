import React from "react";
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <>
      {props.postComments.map(comment => (
        <div className="comment" key={comment.id}>
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};

CommentSection.propTypes = {
    postComments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
        })
    )
}

export default CommentSection;
