import React , {useState} from "react";

const Counter = function(){
    const [count, setCount] = useState(0)
    const [likes, setState] = useState(0)
    const [text, setValue] = useState('some text')
  
    function increment(){
        setState(likes+1)
        console.log(likes)
    }
    function decrement(){
        setState(likes-1)
        console.log(likes)
    }

    return(
        <div>
         <h1>{likes}</h1>
        <h1>{text}</h1>
        <input type="text" value={text} onChange={event => setValue(event.target.value)}></input>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </div>
    );
}

export default Counter;