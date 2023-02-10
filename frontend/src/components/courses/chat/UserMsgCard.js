import { Card } from "@mui/material";

const UserMsgCard = ({ key, message }) => {
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

export default UserMsgCard;