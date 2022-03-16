import React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';

import SearchBar from './components/form/SearchBar';
import MenuDrawer from './components/layout/MenuDrawer';

import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet';

import './App.css';

// const BankIcon = new Icon({
//   iconUrl: require('../public/imgs/marker_icons/icon_bank.png')
// })

// Used purely to determine latitude and longitude coordinates for nodes
// const LocationMarker = () => {
//   const[position, setPosition] = React.useState({
//     "lat": 0,
//     "lng": 0,
//   })
//   const map = useMapEvents({
//     click(e: any) {
//       console.log(e.latlng)
//       setPosition(e.latlng)
//     },
//   })

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup> {position.toString()} </Popup>  
//     </Marker>
//   )
// }

const App = () => {
  const [nodeList, setNodeList] = React.useState<any[]>([])
  const [connList, setConnList] = React.useState<any[]>([])

  React.useEffect(() => {
    axios
      .get("http://192.168.1.31:3001/nodes")
      .then(response => {
        setNodeList(response.data)
      })
    axios
      .get("http://192.168.1.31:3002/connections")
      .then(response => {
        setConnList(response.data)
      })
  }, [])

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
      <MapContainer center={[0, 0]} zoom={5} zoomControl={false} maxBounds={[[100, 180], [-100, -180]]} style={{ background: 'black', overflow: 'hidden' }}>
        <TileLayer
          url="http://192.168.1.31:3100/assets/images/map/tiles/{z}/{x}/{y}.jpg"
          minZoom={1}
          maxZoom={7}
          noWrap={true}
        />
        {nodeList.map(node =>
          "lat" in node ?
            <Marker
              key={node.id}
              position={[node.lat, node.lng]}
            > 
              <Popup>
                {node.name}
              </Popup>
            </Marker>
            :
            null
        )}
        {connList.map(conn =>
          <Polyline key={conn.id} positions={conn.coords} color={'white'} />
        )}
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
}

export default App;
