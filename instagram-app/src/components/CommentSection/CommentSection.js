import React from "react";
import Comment from "./Comment";
// import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <>
      {props.postCommentsArray.map(commentObj => {
        return (
          <div className="comment">
            <Comment commentObj={commentObj} />
          </div>
        );
      })}
      <form>
        <input placeholder="Enter comment here" />
      </form>
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
