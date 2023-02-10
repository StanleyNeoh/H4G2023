import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Header = (props) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        mx: 3,
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${props.image})`,
      }}
    >
      {<img style={{ display: 'none' }} src={props.image} alt={props.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            <Box sx={{ textAlign: 'center', m: 3 }}>{props.title}</Box>
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            <Box sx={{ textAlign: 'right', fontStyle: 'italic', m: 3 }}>{props.description}</Box>
          </Typography>
        </Box>
      </Grid>
    </Paper>
  );
}

export default Header;