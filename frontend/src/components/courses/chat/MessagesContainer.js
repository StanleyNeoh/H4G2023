import { Box, Card } from "@mui/material"
import OtherMsgCard from "./OtherMsgCard"
import UserMsgCard from "./UserMsgCard"

const MessagesContainer = ({ messages, user }) => {
    return (
        <Box className="message-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", marginBottom: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "70vw", padding: 2, borderRadius: 2}}>
                {
                    messages && messages.map((message, key) => {
                        if (user == message.author) {
                            return (
                                // Message sent by this user
                                <UserMsgCard key={key} message={message} />
                            )
                        }
                        return (
                            // Message send by other user
                            <OtherMsgCard key={key} message={message} />
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default MessagesContainer