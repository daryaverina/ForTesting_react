import React, { useState, useRef } from 'react';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
  const[posts, setPosts] = useState([
    {id:1, title:"mytitle", body:"mybody"},
    {id:2, title:"mytitle 2", body:"mybody 2"},
    {id:3, title:"mytitle 3", body:"mybody 3"}
  ])
  const[myval, setMyval] = useState('')

 
  return (
    <div class="App">
    <PostForm/>
    <h1>{myval}</h1>
    </div>
  );
}

export default App;
