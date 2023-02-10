import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import SendIcon from '@mui/icons-material/Send';


const ChatInput = () => {
    return (
        <div>
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
        </div>
    )
}

export default ChatInput