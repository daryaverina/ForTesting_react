import React , {useState} from "react";

const PostItem = function(props){

    return(
        <div>
            <div class="post">
            <div class="post__content:>">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div class="post__btns">
                <button>Удалить</button>
            </div>
            </div>
        </div>
    );
}

export default PostItem;