import { IAirQualityType, IWeatherType } from "@/types/DataType";
import { create } from "zustand";
import { initAirQualityState, initWeatherState } from "./initState";

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

interface IWeatherDataStore {
  weatherData: IWeatherType;
  setWeatherData: (weather: any) => void;
}

// weather
export const useWeatherStore = create<IWeatherDataStore>((set) => ({
  weatherData: initWeatherState,
  setWeatherData: (weather: any) => {
    set((state: any) => ({
      ...state,
      weatherData: weather,
    }));
  },
}));

interface IAirQualityDataStore {
  airQuality: IAirQualityType;
  setAirQuality: (airQuality: any) => void;
}

// air quality
export const useAirQualityStore = create<IAirQualityDataStore>((set) => ({
  airQuality: initAirQualityState,
  setAirQuality: (airQuality: any) => {
    set((state: any) => ({
      ...state,
      airQuality: airQuality,
    }));
  },
}));
