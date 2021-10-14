import React, { useEffect } from 'react'
import { useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './App.css';
const Chat = ({socket,username,room}) => {
    const [curretMessage, setcurretMessage] = useState("");
    const [messageList,setMessageList]=useState([]);
    const sendMessage=async()=>{
        if(curretMessage!=="")
        {
            const messageData={
                room:room,
                author:username,
                message:curretMessage,
                time:
                new Date(Date.now()).getHours()
                +":"+ 
                new Date(Date.now()).getMinutes()
            };
            await socket.emit("send_message",messageData);
            setMessageList((list)=>[...list,messageData]);
            setcurretMessage("");
        }
    }
    useEffect(() => {
        socket.on("receive_message",(data)=>{
        setMessageList((list)=>[...list,data]);
        });
    }, [socket]);
    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
             
                <div className="chat-body">
                <ScrollToBottom className="message-container">
                {messageList.map((messageContent)=>{
                    return (
                    <>
                    <div className="message" id={username===messageContent.author?"you":"other"}>
                        <div>
                            <div className="message-content">
                                <p>
                                {messageContent.message}
                                </p>
                            </div>
                            <div className="message-meta">
                                <p id="time">{messageContent.time}</p>
                                <p id="a uthor">{messageContent.author}</p>
                            </div>
                        </div>
                    </div> 
                        
                    </>
                )})}
                </ScrollToBottom>
            </div>
           
            <div className="chat-footer">
                <input 
                    type="text" 
                    placeholder="Hey.."
                    value={curretMessage}
                    onChange={(event)=>{
                    setcurretMessage(event.target.value);}}
                    onKeyPress={(event)=>{
                        event.key==="Enter" && sendMessage();
                    }}  
        />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat
