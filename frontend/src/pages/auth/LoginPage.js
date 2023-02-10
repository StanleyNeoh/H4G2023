import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Container component="wrapper" maxWidth="sm" margin="auto">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography component="heading" variant="h5">Sign In</Typography>
            </Box>
            <Box component="form" sx={{ mt: 5 }} >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
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
                >Sign In</Button>
            </Box>
            <Grid container sx={{py: 7}}>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link to="/register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
        </Container>
    )
}

export default Login