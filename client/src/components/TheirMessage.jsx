import React from 'react'

const TheirMessage = ({lastMessage,message}) => {
    const isFirstMessageByUser=!lastMessage||lastMessage.sender.username===! message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avatar"
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}>
                </div>
            )}
            {
            message?.attachements?.length>0 ?(
            <img
                src={message.attachements[0].file}
                alt="message.attacement"
                className="message-image"
                style={{marginLeft:isFirstMessageByUser?'4px':'48px'}}
            />
            ):(
                <div className="messsage" style={{float:'left',backgroundColor:'#3B2A50',marginLeft:isFirstMessageByUser?'4px':'48px'}}>
                    {message.text}
                </div>)
            }
            
        </div>
    )
}

export default TheirMessage
