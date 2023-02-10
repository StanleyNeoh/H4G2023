import { Divider } from "@mui/material"
import { useState } from "react"
import { Container } from "@mui/system";
import ChatHeader from "./ChatHeader";
import MessagesContainer from "./MessagesContainer";
import ChatInput from "./ChatInput";
import "./CourseChat.css";

const CourseChat = () => {

    const [channel, setChannel] = useState({ id: 1, name: 'Cool Course', participants: 10 })
    const [user, setUser] = useState("John Doe")
    const [messages, setMessages] = useState([
        {id: 1, time: "17:05", author: "John Doe", content: "Hello there!"},
        {id: 2, time: "17:06", author: "Mike Tyson", content: "Nice to meet you!"},
        {id: 2, time: "17:06", author: "Mike Tyson", content: "Nice to meet you!"},
        {id: 2, time: "17:06", author: "Mike Tyson", content: "Nice to meet you!"},
        {id: 1, time: "17:05", author: "John Doe", content: "Hello there!"},
        {id: 1, time: "17:05", author: "John Doe", content: "Hello there!"},
        {id: 1, time: "17:05", author: "John Doe", content: "Hello there!"},
        {id: 1, time: "17:05", author: "John Doe", content: "Hello there!"},
    ])

    return (
        <Container>   
            <ChatHeader channel={channel}/>
            <MessagesContainer messages={messages} user={user} />
            <ChatInput />
            <Divider sx={{ py: 10 }} />
        </Container>
    )
}

export default CourseChat