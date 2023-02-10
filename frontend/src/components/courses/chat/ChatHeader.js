import { Box } from "@mui/system"

const ChatHeader = ({ channel }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'space-between'
        }}>
            <h1>{channel.name} Chat</h1>
        </Box>
    )
}

export default ChatHeader