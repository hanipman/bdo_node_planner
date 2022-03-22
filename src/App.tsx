import React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';

import SearchBar from './components/form/SearchBar';
import MenuDrawer from './components/layout/MenuDrawer';

import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet';

import './App.css';

import MarkerIcons from './assets/imgs/marker_icons';

interface Node {
  id: number,
  name: string,
  type: string,
  cp: number,
  main_node?: string,
  resources?: string[],
  lat: number,
  lng: number,
  connected_nodes: number[]
}

interface Connection {
  id: number[],
  coods: number[][]
}

// Used purely to determine latitude and longitude coordinates for nodes
const LocationMarker = () => {
  const[position, setPosition] = React.useState({
    "lat": 0,
    "lng": 0,
  })
  const map = useMapEvents({
    click(e: any) {
      console.log(e.latlng)
      setPosition(e.latlng)
    },
  })
  
  return position === null ? null : (
    <Marker position={position}>
      <Popup> {position.toString()} </Popup>  
    </Marker>
  )
}

const GetIcon = (node_type: string) => {
  switch (node_type) {
    case 'bank':
      return MarkerIcons.Bank;
    case 'city':
      return MarkerIcons.City;
    case 'connection':
      return MarkerIcons.Connection;
    case 'dangerous':
      return MarkerIcons.Dangerous;
    case 'excavation':
      return MarkerIcons.Excavation;
    case 'fishing':
      return MarkerIcons.Fishing;
    case 'gateway':
      return MarkerIcons.Gateway;
    case 'gathering':
      return MarkerIcons.Gathering;
    case 'lumbering':
      return MarkerIcons.Lumbering;
    case 'mining':
      return MarkerIcons.Mining;
    case 'production':
      return MarkerIcons.Production;
    case 'specialties':
      return MarkerIcons.Specialties;
    case 'town':
      return MarkerIcons.Town;
    case 'trading post':
      return MarkerIcons.TradingPost;
    default:
      return MarkerIcons.Default;
  }
}

const App = () => {
  const [nodeList, setNodeList] = React.useState<Node[]>([])
  const [connList, setConnList] = React.useState<any[]>([])
  
  React.useEffect(() => {
    axios
      .get("http://192.168.1.31:3001/nodes")
      .then(response => {
        setNodeList(response.data)
      })
      axios
      .get("http://192.168.1.31:3001/connections")
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
      <MapContainer center={[0, 0]} zoom={5} zoomControl={false} maxBounds={[[100, 180], [-100, -180]]} tap={false} style={{ background: 'black', overflow: 'hidden' }}>
        <LayersControl>
          <LayersControl.BaseLayer checked={true} name="Node Tiles">
            <TileLayer
              url="http://192.168.1.31:3100/assets/images/map/tiles/{z}/{x}/{y}.jpg"
              minZoom={1}
              maxZoom={7}
              noWrap={true}
            />
          </ LayersControl.BaseLayer>
          <LayersControl.Overlay checked={true} name="Nodes">
            <LayerGroup>
              {nodeList.map(node =>
                "lat" in node ?
                  <Marker
                    key={node.id}
                    position={[node.lat, node.lng]}
                    icon={GetIcon(node.type)}
                  > 
                    <Popup>
                      {node.id}
                      {node.name}
                    </Popup>
                  </Marker>
                  :
                  null
              )}
            </ LayerGroup>
            <LocationMarker />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked={true} name="Connections">
            <LayerGroup>
              {connList.map(conn =>
                <Polyline key={conn.id} positions={conn.coords} color={'white'} />
              )}
            </LayerGroup>
          </LayersControl.Overlay>
        </ LayersControl>
      </MapContainer>
    </div>
  );
}

export default App;
