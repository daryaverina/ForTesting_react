import React , {useState} from "react";
import PostItem from "./PostItem";

const PostList = function({posts, title}){

    return(
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                 <PostItem number={index+1} post = {post} key={post.id}/>
        )}
        </div>
    );
}

export default PostList;