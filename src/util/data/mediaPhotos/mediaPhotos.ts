import VipCarShadow from "../../../assets/media/VipCarShadow.jpg"
import VipAlfaRomeo from "../../../assets/media/VipAlfaRomeo.jpg"
// import TrackCorner from "../../../assets/media/TrackCorner.png"
import TrackMountains from "../../../assets/media/TrackMountains.png"
import StreetRacing from "../../../assets/media/StreetRacing.png"
import RaceFinish from "../../../assets/media/RaceFinish.png"
import Porche from "../../../assets/media/Porche.png"
import CarNightTrack from "../../../assets/media/CarNightTrack.png"
import CarInGarage from "../../../assets/media/CarInGarage.png"


type MediaPhoto = {
  src: string;
  alt: string;
}

export const mediaPhotos: MediaPhoto[] = [
  { src: CarInGarage, alt: "VIP Racing Car in Garage" },
  { src: VipCarShadow, alt: "VIP Racing Car with dark Shadow" },
  { src: VipAlfaRomeo, alt: "VIP Racing Alfa Romeo Car" },
  // { src: TrackCorner, alt: "Racing Track Corner" },
  { src: StreetRacing, alt: "Street Racing" },
  { src: Porche, alt: "Porche" },
  { src: CarNightTrack, alt: "Car on Night Track" },
  { src: RaceFinish, alt: "Race Finish" },
  { src: TrackMountains, alt: " Racing Track with Mountains" },
];
