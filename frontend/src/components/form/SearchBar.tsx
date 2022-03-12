import * as React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper component='form' sx={{ display: 'flex', padding: '5px 10px', justifyContent: 'center', backgroundColor: 'white', pointerEvents: 'auto' }}>
      <Typography sx={{ lineHeight: 1.9 }}>
        CP: 300
      </Typography>
      <Divider sx={{ height: 'inherit', width: '1px', m: 0.5, background: 'gray', orientation: 'vertical' }} />
      <InputBase
        placeholder='Search Nodes'
        sx={{ width: 200 }}
      />
      <IconButton sx={{ maxHeight: '30px', maxWidth: '30px', minHeight: '30px', minWidth: '30px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar