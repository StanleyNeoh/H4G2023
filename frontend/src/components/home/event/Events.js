import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import EventCard from './EventCard';
import img1 from '../../../images/act1.png';
import img2 from '../../../images/act2.png';
import img3 from '../../../images/act3.png';
import img4 from '../../../images/act4.png';
import img5 from '../../../images/act5.png';
import img6 from '../../../images/act6.png';

const imgs = [img1, img2, img3, img4, img5, img6];

const Events = () => {
  return (
    <Box maxWidth='lg' margin="auto">
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {imgs.map((image) => (
            <Grid item key={image} xs={12} sm={6} md={4}>
              <EventCard img={image}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Events;