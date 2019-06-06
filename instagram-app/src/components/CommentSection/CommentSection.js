import React from "react";
import Comment from "./Comment";

class CommentSection extends React.Component {
  state = {
    // setting a key to the prop that is being passed down from PostContainer
    postCommentsDataArray: this.props.postCommentsArray,
    // commentInput key to set value to load as empty, and something that handleChange can update
    commentInput: ""
  };
  // addNewComment function 
  addNewEvent = (event, index) => {
  
}

  // handleChange Function
  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="comment-section">
        {this.props.postCommentsArray.map(commentObj => {
          return (
            <div key={commentObj.id} className="comment">
              <Comment commentObj={commentObj} />
            </div>
          );
        })}
        <form onSubmit={() =>this.addNewEvent()}>
          <input
            name="commentInput"
            value={this.state.commentInput}
            placeholder="Add a comment..."
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
