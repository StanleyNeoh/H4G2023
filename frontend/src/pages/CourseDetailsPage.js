import * as React from 'react';
import Box from '@mui/material/Box';
import CourseBanner from "../components/courses/CourseBanner";
import CourseNav from "../components/courses/CourseNav";
import CourseReview from "../components/courses/CourseReview";
import Instructor from "../components/courses/Instructor";
import CourseAbout from "../components/courses/CourseAbout";
import Heading from '../components/common/Heading';
import CourseChat from '../components/courses/chat/CourseChat';

const CourseDetailPage = () => {
  const instructor = {
    name: "Lorem Ipsum",
    bio: "ipsum",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  const about = {
    title: "Sample post",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
  }

  return (
    <Box
      maxWidth="lg"
      margin="auto"
    >
      <CourseBanner
        title="Skating"
        description="Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."
        image='https://source.unsplash.com/random'
        imageText='main image description'
        linkText='Continue reading…'
      />
      <hr />
      <CourseNav />
      <hr />
      <Heading title="Instructor" id="instructor" />
      <Instructor info={instructor} />
      <Heading title="About" id="about" />
      <CourseAbout about={about} />
      <Heading title="Top Reviews" id="review" />
      <CourseReview />
    </Box>
  )
}

export default CourseDetailPage;