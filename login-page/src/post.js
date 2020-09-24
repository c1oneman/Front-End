// Write your Character component here
import React from "react"


const Post = (props) => {
    console.log(props.post)
    const post = props.post
    
    return(
        
      
           
            <div className = 'card'>
            <div className = 'title'>
            <div className = 'left'>
            <h1>{post.name}</h1>
            </div>
            <div className = 'right'>
            <p className = 'category'>{post.category}</p>
            </div>
            </div>
            
            <p className = 'description'>{post.description}</p>
            </div>
     
    )
}

export default Post