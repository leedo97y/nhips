import { create } from "zustand";

interface ILocation {
  lat: number;
  setLat: (mode: any) => void;
  lon: number;
  setLon: (mode: any) => void;
}
// geolocation
export const useGetLocation = create<ILocation>((set) => ({
  lat: 0,
  setLat: (lat: any) => {
    set(() => ({
      lat: lat,
    }));
  },
  lon: 0,
  setLon: (lon: any) => {
    set(() => ({
      lon: lon,
    }));
  },
}));
