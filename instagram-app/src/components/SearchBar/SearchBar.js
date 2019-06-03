import React from “react”

function SearchBar (){
   return (
       <div>
           <div className =“left-side-icons”>
               <img></img>
               <img></img>
           </div>

           <form><input
                   placeholder=“Search”></input></form>

           <div className = “right-side-icons”>
               <img></img>
               <img></img>
               <img></img>
           </div>
       </div>
   )
}

export default SearchBar;
