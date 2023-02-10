import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TimeIcon from '@mui/icons-material/AccessTime';
import CalendarIcon from '@mui/icons-material/CalendarMonth';

function CourseAbout({about}) {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.900',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        p: 3
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
      >
        <Typography variant="h6" gutterBottom>
          {about.title}
        </Typography>
        <Typography variant="h7" gutterBottom>
          {about.description}
        </Typography>
        <ListItem>
          <ListItemIcon>
            <CalendarIcon />
          </ListItemIcon>
          <ListItemText primary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TimeIcon />
          </ListItemIcon>
          <ListItemText primary="Work" />
        </ListItem>
      </Grid>
    </Paper>
  );
}

export default CourseAbout;