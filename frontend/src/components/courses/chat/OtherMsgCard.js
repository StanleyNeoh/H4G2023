import { Card } from "@mui/material"

const OtherMsgCard = ({ key, message }) => {
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
}

export default OtherMsgCard