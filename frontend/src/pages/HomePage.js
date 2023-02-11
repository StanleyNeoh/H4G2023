import Header from "../components/header/Header";
import Events from "../components/home/event/Events";
import { Typography, Box } from "@mui/material";
import Banner from '../images/banner.png'
import { useEffect, useState } from "react";
import { get_user_details_API_path } from "../strings";
import Section from "../components/home/section/Section";

const Home = () => {
  const [name, setName] = useState("")
  const settings = {
    method: 'GET',
      headers: {
          'Authorization': localStorage.getItem('AuthToken'),
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
  }

  const fetchData = async () => {
    await fetch(get_user_details_API_path, settings)
      .then(res => res.json())
      .then(obj => {
        setName(obj.name)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <Box margin="auto" maxWidth="lg">
      {localStorage.getItem("AuthToken") ? <Typography
        gutterBottom
        variant="h3"
        sx={{ mx: 3 }}
      >
        Welcome back, {name}!
      </Typography> : ""}
      <Header
        title="A place where people help one another and no one is left behind"
        description="- Aspirations of Puay Kheng -"
        image={Banner}
        imageText='main image description'
      />
      <Section
        title="Story"
        content="How might we, as a community empower, equip and co-create with persons with disabilities to enable them to access, use and enjoy places, services, produces and/or information, whether physical or virtual, so that persons with disabilities can connect to and be included in the wider community?"
      />
      <Section
        title="Vision"
        content="HeartShare is a platform with an emphasis on inclusivity, and accommodation that allows persons with or without disabilities alike to conduct classes catered for other persons with disabilities."
      />
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