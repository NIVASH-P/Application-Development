import React, { useState } from 'react'
import './ChatBot.css';
import chat from '../../Assests/chatbot.svg';
import { Swigzai } from './Swigzai';

export const ChatBot = () => {

  const[open,setopen]=useState(false);


  return (
    <div>
       {
        open ?  <div className='div2'>
        
                  <Swigzai/>
                </div>
      :    ""

       }
       <div className='div1'>
                        <img onClick={()=>setopen(prev=>prev===true ? false : true)} className="chat"src={chat} alt="" />
                 </div> 
    </div>
  )
}
