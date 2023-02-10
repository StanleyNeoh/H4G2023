import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia } from '@mui/material';

const EventCard = ({img}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 250,
        ':hover': {
          boxShadow: 20,
        },
      }}
    >
      <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 180 }}
            image={img}
            title="green iguana"
          />
        </CardActionArea>
    </Card>
  );
}

export default EventCard;
