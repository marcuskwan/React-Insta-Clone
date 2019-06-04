import React from "react";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  return (
    <>
      {props.postsDataArray.map(postObject => (
        <div className="post-object" key={postObject.id}>
          <img src={postObject.imageUrl} alt="main-post"/>

          <p>{postObject.likes}</p>
          <CommentSection postComments={postObject.comments} />
          <form>
            <input placeholder="Type a comment" />
          </form>
        </div>
      ))}
    </>
  );
}

export default PostContainer;
