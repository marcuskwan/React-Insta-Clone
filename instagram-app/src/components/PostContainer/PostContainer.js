import React from ‘react’;
import CommentSection from “../CommentSection/CommentSection”;


function PostContainer(props) {
   return (
           <>
//             {props.postArray.map(postObject => (
               // return(
               <div className = “Post-object”>
                   <img src ={postObject.imageUrl} />

                   <p>{postObject.likes}</p>
                   <CommentSection postComments = {postObject.comments} />
                   <form>
                       <input
                           placeholder=“comment”></input>
                   </form>
               </div>)
           )}
           </>
   )
}
export default PostContainer;
