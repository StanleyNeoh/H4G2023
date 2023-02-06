import CourseBanner from "../components/CourseBanner";
import CourseNav from "../components/CourseNav";

const CourseDetailPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default CourseDetailPage;