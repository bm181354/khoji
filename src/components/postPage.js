import React from "react"

import Post from "../containers/post"
import Navbar from "../containers/Navbar"



const PostPage = props => {
   
    // const {title,description,name,address,contact,postid} = props

    // <Redirect to="/404" />

    //get the id from the param
    

    return(
        <div className ="row">

       
          
            <Navbar/>

            <Post /> { // pass id here
                 
            }
            
        
          
            
        </div>
    )
}

export default PostPage