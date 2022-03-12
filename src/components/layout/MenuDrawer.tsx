import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import ArrowBackIosSharp from '@mui/icons-material/ArrowBackIosSharp';
import MenuSharp from '@mui/icons-material/MenuSharp';

const drawerWidth = 250;

const MenuDrawer = () => {
  const [state, setState] = React.useState(false);

  const drawer_header_style = {
    display: 'flex',
    width: drawerWidth,
    height: '60px',
    padding: '10px 20px',
    alignItems: 'center',
    justifyContent: 'flex'
  };

  const openDrawer = () => {
    setState(true);
  };

  const closeDrawer = () => {
    setState(false);
  };

  const DrawerHeader = () => {
    return (
      <div style={drawer_header_style}>
        <IconButton sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={closeDrawer}>
          <ArrowBackIosSharp />
        </IconButton>
      </div>
    )
  };

  return (
    <React.Fragment>
      <IconButton sx={{ float: 'left', maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', pointerEvents: 'auto' }} onClick={openDrawer}>
        <MenuSharp />
      </IconButton>
      <Drawer
        anchor='left'
        open={state}
        onClose={closeDrawer}
        variant='persistent'
        sx={{ top: '60px', pointerEvents: 'auto' }}
      >
        <Box sx={{ width: drawerWidth, display: 'flex' }} role='presentation'>
          <DrawerHeader/>
          <Divider light={true}/>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default MenuDrawer;