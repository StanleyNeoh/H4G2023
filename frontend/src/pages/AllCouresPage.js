import * as React from 'react';
import CourseCard from '../components/courses/CourseCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SearchBar from '../components/search/SearchBar';

const courses = [
  {title: "Skating", description: "Nothing"},
  {title: "Skating", description: "Nothing"},
  {title: "Skating", description: "Nothing"},
  {title: "Skating", description: "Nothing"},
  {title: "Skating", description: "Nothing"}
]

const AllCouresPage = () => {
  return (
    <Box maxWidth='lg' margin="auto">
      <SearchBar />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item key={course} xs={12} sm={6} md={4}>
              <CourseCard
                title={course.title}
                description={course.description}
                image={course.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Stack alignItems="center" sx={{ py: 5}}>
        <Pagination count={6} variant="outlined" color="primary" />
      </Stack>
    </Box>
  )
}

export default AllCouresPage
