import React , {useState} from "react";
import classes from './MyButton.module.css'

const MyButton = function({children, ...props}){

    return(
        <button {...props} class={classes.myBtn}>
           {children}
        </button>
    );
}

export default MyButton;