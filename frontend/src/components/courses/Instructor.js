import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Instructor = ({info}) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 300, minHeight: 300, display: { xs: 'none', sm: 'block' } }}
            image='https://source.unsplash.com/random'
            alt={info.imageLabel}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {info.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {info.bio}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {info.aboutme}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default Instructor;