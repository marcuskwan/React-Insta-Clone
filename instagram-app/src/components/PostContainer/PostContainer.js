import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <>
      {props.postsDataArray.map(postObject => (
        <div className="post-object" key={postObject.id}>
          <img src={postObject.imageUrl} alt="main-post" />

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

PostContainer.propTypes = {
  postsDataArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  )
};

export default PostContainer;
