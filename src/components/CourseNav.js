import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

const CourseNav = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button>About</Button>
        <Button>Instructors</Button>
        <Button>Review</Button>
      </Stack>
    </div>
  );
}

export default CourseNav;