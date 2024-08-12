import {React,useState} from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import './Swigzai.css';
import { FiSend } from "react-icons/fi";

export const Swigzai = () => {
    const [Input, setInput] = useState("");
    const [message,setMessage]=useState([]);
    const [isSending, setIsSending] = useState(false);
    const handleSent = async() =>{
      setIsSending(true);
      try
      {
      const response = await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDtfZank2YsuIa33qUNgKwG0rjVY0jIzbY",
        method:"POST",
        data:{
          "contents":[
            {"parts":[
              {"text":Input}
            ]}
          ],
        }
      })
      setMessage(
        [
          ...message,{
            prompts : Input,
            text:response.data.candidates[0].content.parts[0].text,
          }
        ]
      )}
      finally {
        setIsSending(false);
      }
    }
    return (
      <div className="bot">
        <nav>
          <ul>
            <li>Message</li>
            <li></li>
          </ul>
        </nav>
        <div className="chat">
          {
            message.map((a)=>{
              return(
                <>
                <div className="user_message">
                  {a.prompts}
                </div>
                <Markdown>
                  {a.text}
                </Markdown>
                </>
              )
            })
          }
          
  
        </div>
        <div className="input-container">
      <input className="text" value={Input} onChange={(e) => setInput(e.target.value)} placeholder="Message..." />
      <button className="send" onClick={handleSent}>
        {isSending ? (
          <div className="sending" />
        ) : (
          <FiSend />
        )}
      </button>
    </div>
      </div>
    );
}