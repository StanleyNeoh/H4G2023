import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ReviewItem from './ReviewItem';
import Button from '@mui/material/Button';

export default function CourseReview() {
  const reviews = [
    { name: "Alice", feedback: "That's great" },
    { name: "Bob", feedback: "That's great" }
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Reviews
        </Typography>

        {/* Review lists */}
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {reviews.map((item) => (
            <ReviewItem name={item.name} feedback={item.feedback} />
          ))}
        </List>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <TextField
            sx={{width: '100%'}}
            label='Write a review'
            multiline
            placeholder='Share your experience'
            rows={3}
            variant='standard'
          />
          <Button variant='outlined'>Submit</Button>
        </Container>
      </Box>
    </Box>
  );
}