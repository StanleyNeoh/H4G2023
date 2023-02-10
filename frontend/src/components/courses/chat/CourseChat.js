import { Avatar, Button, Card, Divider, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import "./CourseChat.css";
import { Box, Container } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';

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
        <div>
        <Container>   
            {
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'space-between'
                }}>
                    <h1>{channel.name} Chat</h1>
                </Box>
            }
            <Box className="message-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", marginBottom: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", width: "70vw", padding: 2, borderRadius: 2}}>
                    {
                        messages && messages.map((message, key) => {
                            if (user == message.author) {
                                return (
                                    <Card key={key} variant="outlined" sx={{
                                        padding: 2,
                                        marginTop: 1.5,
                                        marginBottom: 1.5,
                                        background: "#F1F1F1",
                                        color: "black",
                                        alignSelf: "flex-end",
                                        width: "70%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <div className="message-right">
                                            <b>{message.author}</b>
                                        </div>
                                        <div className="message-right">
                                            {message.content}
                                        </div>
                                        <div>
                                            {message.time}
                                        </div>
                                </Card>
                                )
                            }
                            return (
                                <Card key={key} variant="outlined" sx={{
                                    padding: 2,
                                    marginTop: 1.5,
                                    marginBottom: 1.5,
                                    alignSelf: "flex-start",
                                    width: "70%",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <div className="message-left">
                                        <b>{message.author}</b>
                                    </div>
                                    <div className="message-left">
                                        {message.content}
                                    </div>
                                    <div className="message-right">
                                        {message.time}
                                    </div>
                                </Card>
                            )
                        })
                    }
                </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center" }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="message"
                    label="Send a message"
                    name="message"
                />
                <Button sx={{color: "black", background: "white", marginLeft: 2, height: "4rem" }} 
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}>Send</Button>
            </Box>
            <Divider sx={{ py: 10 }} />
        </Container>
        </div>
    )
}

export default CourseChat