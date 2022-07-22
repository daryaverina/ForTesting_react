import React , {useState} from "react";
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Body = ({children, ...props}) => {
    return(
        <input {...props} type="text" placeholder='bodys'></input>
        );
}

export default Body;