import React from 'react';
import {MessagesType} from '../../App';

type MessagesPropsType = {
    messages: MessagesType[]
}

export const Messages: React.FC<MessagesPropsType> = (props) => {
    const messagesJSX = props.messages.map((m, i) => <li key={i}>{m.message}</li>)
    return (
        <>{messagesJSX}</>
    )
}