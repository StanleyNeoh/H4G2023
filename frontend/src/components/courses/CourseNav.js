import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const CourseNav = () => {
  return (
    <Stack direction="row" spacing={20} alignItems="center" justifyContent="center">
      <Button href='#instructor'>Instructor</Button>
      <Button href='#about'>About</Button>
      <Button href='#review'>Review</Button>
      <Button><Link to="/courses/:category/:courseName/chat">Chat</Link></Button>
    </Stack>
  );
}

export default CourseNav;