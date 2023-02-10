import { Card, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { get_user_details_API_path } from "../../strings"

const LoggedIn = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const settings = {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('AuthToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }

    const fetchData = async () => {
        await fetch(get_user_details_API_path, settings)
        .then(res => res.json())
        .then(obj => {
            setName(obj.name)
            setEmail(obj.email)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    })
    return (
        <div>
            <Card sx={{ minWidth: 275, padding: 2, borderRadius: 2 }}>
                <Typography variant="body2">
                    Hey, {name}! 
                    <br />
                    It seems that you are already logged in as <b>{email}!</b>
                </Typography>
            </Card>
        </div>
    )
}

export default LoggedIn;