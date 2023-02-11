import { Typography, Box } from "@mui/material";

const Section = ({title, content}) => {
  return (
    <Box>
      <Typography
        gutterBottom
        variant="h3"
        sx={{ mx: 3, mt: 10 }}
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ mx: 3, textAlign: 'justify' }}
      >
        {content}
      </Typography>
    </Box>
  )
}

export default Section;