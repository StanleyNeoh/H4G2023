import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { register_API_path } from "../../strings"

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (e) => {
        setName(String(e.target.value))
        console.log(register_API_path)
    }
    
    const handleEmailChange = (e) => {
        setEmail(String(e.target.value))
    }

    const handlePasswordChange = (e) => {
        setPassword(String(e.target.value))
    }

    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "name": name, "email": email, "password": password })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(register_API_path, settings)
            .then(res => res.json())
            .then(obj => {
                localStorage.setItem("token", obj.token)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <Container maxWidth="sm" margin="auto">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant="h5">Sign Up</Typography>
            </Box>
            <Box component="form" sx={{ mt: 5 }} >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    onChange={handleNameChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleEmailChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handlePasswordChange}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, background: '#FF4820', color: 'white' }}
                    onClick={handleSubmit}
                >Sign Up</Button>
            </Box>
            <Grid container sx={{py: 20}}>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link to="/login">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
        </Container>
    )
}

export default Register