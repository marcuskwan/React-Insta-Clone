import React from "react";

const Comment = props => {
  return (
    <>
      <div className="username">{props.commentObj.username}</div>
      <div className="text">{props.commentObj.text}</div>
    </>
  );
};

export default Comment;
