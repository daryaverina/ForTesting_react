import React , {useState} from "react";
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) =>{

    return(
        <input ref={ref} {...props} class={classes.myInput}>
        </input>
    );
});

export default MyInput;