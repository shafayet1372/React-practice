import { useState } from "react";

const Custom=()=>{
    const[count,setCount]=useState(0)
   
    const handleClick=()=>{
        setCount(count+1)
    }
    return{
        count,
        handleClick 
    }
}

export default Custom