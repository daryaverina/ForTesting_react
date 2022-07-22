import React , {useState} from "react";
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';


const Title = ({children, ...props}) => {
    return(
            <input {...props} type="text" placeholder='title'></input>
    );
}

export default Title;