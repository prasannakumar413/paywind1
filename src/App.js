import './App.css';
import React,{useState,useRef,useEffect} from 'react'

function Button()
{
    const[num,setNum]=useState(0);
    useEffect(()=>{document.title=`click ${num}` })
}
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{setNum(num+1)}}>click</button>
        </div>
    )

export default Button;



import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './App.js';



 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Button></Button>);
