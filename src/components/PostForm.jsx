import React , {useState, useEffect } from "react";
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import Title from "./Title";
import Body from './Body';
import axios from 'axios'

function PostForm({create, draw}) {
    const [post, setPost] = useState({title:'', body: '', posts:[]})

    useEffect(() => {

        // Update the document title using the browser API
        const url= 'http://react/src/components/contacts.php'
        axios.get(url).then(response => response.data)
        .then((data) =>{
            setPost({...post, posts:data})
            console.log(post.posts);
        })

        //alert({post})
    }, []);


    const changeTitle =(e) =>{
        e.preventDefault();
        setPost({...post, title: e.target.value})
      //  console.log(post);
    }
    const changeBody =(e) =>{
        e.preventDefault();
        setPost({...post, body: e.target.value})
       // console.log(post);
    }

    const send =(e) =>{
        e.preventDefault();

        let formData = new FormData();
        formData.append('title', post.title)
        formData.append('body', post.body)

        axios({
            method: 'post',
            url: 'http://react/src/components/contacts.php',
            data:formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
        .then(function (response){
            console.log(response)
            alert('New post added');
        })
        .catch(function (response){
            console.log(response)
        });
    }


    return(
        <div>
            <Title onChange={changeTitle} value={post.title}/>
            <Body onChange = {changeBody} value={post.body}/>   
            <div>
                <button onClick={send}>отправить</button>
            </div>
            <div>
                <h2>EXISTING POSTS FROM DB:</h2>
                ----------------------------------------------------------
                {post.posts.map((post, index) =>(
                    <tr key={index}>
                        <td>{post.title}</td> 
                        <td>{post.body}</td>
                    </tr>
                ))}
            </div>
        </div>
    );
}

export default PostForm;