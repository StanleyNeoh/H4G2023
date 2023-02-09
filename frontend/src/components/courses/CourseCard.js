import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const CourseCard = ({category, title, image, description, rating}) => {
  return (
    <Link to={`/courses/${category}/${title}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Rating 
              disabled name="size-medium"
              defaultValue={Math.random() * 5}
              value={rating}
            />
          </CardActions>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default CourseCard;