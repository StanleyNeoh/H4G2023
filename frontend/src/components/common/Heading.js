import Typography from '@mui/material/Typography';

const Heading = ({id,title, subtitle}) => {
  return (
    <div id={id}>
      <Typography variant="h4" gutterBottom sx={{my: 5}}>
        {title}
      </Typography>
    </div>
  )
}

export default Heading;