import React from 'react';

// import fetch from '../services/dataservices'
import { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button  } from 'bootstrap';
export default function Home(){
    const [advice, setAdvice] = useState("");
    const [id, setId] = useState("");
    
const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(advice)
    setAdvice(data.slip.advice);
    setId(data.slip.id);
  };
  const handleClick = () => {
    getAdvice();
  };
  return (
<div className="body1 text-center">


   
   
        <h1 className="id"> advice #  {id}</h1>
      <p className="text"> "{advice}"</p>
     <svg className='svgg'  width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect className='svgg' width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
    
 <br>
 </br>
    <div className='coloe'>
   <button className='button' onClick={handleClick}></button>
   </div> 

     </div>
  );
      
}


