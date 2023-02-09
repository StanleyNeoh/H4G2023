import * as React from 'react';
import Tags from '../common/Tags';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mx: 3}}
    >
      <FormControl sx={{ m: 1 }} variant="filled" fullWidth>
        <OutlinedInput
          placeholder='Search'
          id="outlined-adornment-weight"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </FormControl>
      <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />
      <Tags title="Categories" />
      <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />
      <Tags title="Tags" />
      <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar