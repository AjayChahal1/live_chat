import {React,useState} from 'react'
import {sendMessage,isTyping} from 'react-chat-engine';
import { SendOutlined,PictureOutlined } from '@ant-design/icons';
const MessageForm = (props) => {
    const {value,setValue}=useState('');
    const {chatId,creds} =props;

    const handleChange=(event)=>
    {
        try{
            setValue(event.target.value);

        isTyping(props,chatId);
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
    const handleSubmit=(event)=>
    {
        console.log(event);
        event.preventDefault();
        // const text=value.trim();
        // if(text.length>0)
        // {
        //     sendMessage(creds,chatId,{ text });
        // }
        // sendMessage("");
    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                // value={value}
                onChange={handleChange}
                // onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            
            <input type="submit"></input>
        </form>
    )
}

export default MessageForm
