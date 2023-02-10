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
        variant="h3"
        sx={{ mx: 3, mt: 10 }}
      >
        Together
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ mx: 3, textAlign: 'justify' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Typography
        gutterBottom
        variant="h3"
        sx={{ mx: 3, mt: 10 }}
      >
        Mission
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ mx: 3, textAlign: 'justify' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Typography
        gutterBottom
        variant="h3"
        sx={{ mx: 3, mt: 10 }}
      >
        Events
      </Typography>
      <Events />
    </Box>
  )
}

export default Home