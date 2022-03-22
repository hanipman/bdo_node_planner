import BankIcon from './icon_bank.png';
import CityIcon from './icon_city.png';
import ConnectionIcon from './icon_connection.png';
import DangerousIcon from './icon_dangerous.png';
// import DefaultIcon from './marker.svg';
import ExcavationIcon from './icon_excavation.png';
import FishingIcon from './icon_fishing.png';
import GatewayIcon from './icon_gateway.png';
import GatheringIcon from './icon_gathering.png';
import LumberingIcon from './icon_lumbering.png';
import MiningIcon from './icon_mining.png';
import ProductionIcon from './icon_production.png';
import SpecialtiesIcon from './icon_specialties.png';
import TownIcon from './icon_town.png';
import TradingPostIcon from './icon_trading_post.png';

import L from 'leaflet';

const Bank = L.icon({
  iconUrl: BankIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const City = L.icon({
  iconUrl: CityIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Connection = L.icon({
  iconUrl: ConnectionIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Dangerous = L.icon({
  iconUrl: DangerousIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Default = L.icon({
  iconUrl: require('./marker.svg'),
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Excavation = L.icon({
  iconUrl: ExcavationIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Fishing = L.icon({
  iconUrl: FishingIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Gateway = L.icon({
  iconUrl: GatewayIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Gathering = L.icon({
  iconUrl: GatheringIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Lumbering = L.icon({
  iconUrl: LumberingIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Mining = L.icon({
  iconUrl: MiningIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Production = L.icon({
  iconUrl: ProductionIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Specialties = L.icon({
  iconUrl: SpecialtiesIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const Town = L.icon({
  iconUrl: TownIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const TradingPost = L.icon({
  iconUrl: TradingPostIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

const MarkerIcons = {
  Bank,
  City,
  Connection,
  Dangerous,
  Default,
  Excavation,
  Fishing,
  Gateway,
  Gathering,
  Lumbering,
  Mining,
  Production,
  Specialties,
  Town,
  TradingPost
}

export default MarkerIcons;