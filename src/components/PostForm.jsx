import React , {useState} from "react";
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import Title from "./Title";
import Body from './Body';

const PostForm = ({create, draw}) => {
    const [post, setPost] = useState({title:'', body: ''})

    const changeTitle =(e) =>{
        e.preventDefault();
        setPost({...post, title: e.target.value, body: e.target.value*4})
        console.log(post);
   }
   const changeBody =(e) =>{
    e.preventDefault();
    setPost({...post, title: e.target.value/4, body: e.target.value})
    console.log(post);
}

    return(
        <form>
            <Title onChange={changeTitle} value={post.title}/>
            <Body onChange = {changeBody} value={post.body}/>
        </form>
    );
}

export default PostForm;