import React , {useState} from "react";
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const PostForm = ({create, draw}) => {
    const [post, setPost] = useState({title:'qwe', body: 'rety', test:'тестик'})

    const change_test =(e) =>{
        setPost({...post, test: e.target.value})
        e.preventDefault();
         draw(e.target.value);
    }

    const addNewPost = (e) =>{
        e.preventDefault();
         // setPosts([...posts, {...post, id: Date.now()}])
         const newPost={
            ...post, id:Date.now()
         }
         create(newPost)
         draw(newPost)
        setPost({title:'', body:'', test:''})
    }
            
    return(
        <form>
            <MyInput value={post.test} onChange ={change_test} type="text" placeholder='тестовое'></MyInput>
            <MyInput value={post.title} onChange ={e=>setPost({...post, title: e.target.value})} type="text" placeholder='название поста'></MyInput>
            <MyInput value={post.body} onChange ={e=>setPost({...post, body: e.target.value})} type="text" placeholder='описание поста'></MyInput>
            <MyButton onClick={addNewPost}>создать пост</MyButton>
        </form>
    );
}

export default PostForm;