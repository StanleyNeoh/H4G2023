import Header from "../components/header/Header";
import Events from "../components/home/event/Events";
import { Typography, Box } from "@mui/material";
import Banner from '../images/banner.png'

const Home = () => {
  return (
    <Box margin="auto" maxWidth="lg">
      <Header
        title="A place where people help one another and no one is left behind"
        description="- Aspirations of Puay Kheng -"
        image={Banner}
        imageText='main image description'
      />
      <Typography
        gutterBottom
        variant="h2"
        sx={{mx: 3}}
      >
        Hightlights
      </Typography>
      <Events />
    </Box>
  )
}

export default Home