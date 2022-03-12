import React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';

import SearchBar from './components/form/SearchBar';
import MenuDrawer from './components/layout/MenuDrawer';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './App.css';

const App = () => {

  const appbar_style = {
    top: 0,
    bottom: 'auto',
    height: '60px',
    padding: '10px 20px',
    justifyContent: 'center',
    background: 'transparent',
    boxShadow: 'none',
    pointerEvents: 'none'
  }

  return (
    <div className='fill-window'>
      <AppBar position='fixed' sx={appbar_style}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <MenuDrawer />
          </Grid>
          <Grid item>
            <SearchBar />
          </Grid>
        </Grid>
      </AppBar>
      <MapContainer center={[51.505, -0.09]} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
