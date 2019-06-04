import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <>
      {props.postCommentsArray.map(commentObj => {
        return (
          <div key={commentObj.id} className="comment">
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

export default CommentSection;
