import { IAirQualityType, IWeatherType } from "@/types/DataType";

export const initWeatherState: IWeatherType = {
  base: "",
  clouds: { all: 0 },
  cod: 0,
  coord: { lon: 0, lat: 0 },
  dt: 0,
  id: 0,
  main: {
    feels_like: 0,
    grnd_level: 0,
    humidity: 0,
    pressure: 0,
    sea_level: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: "",
  sys: { type: 0, id: 0, country: "", sunrise: 0, sunset: 0 },
  timezone: 0,
  visibility: 0,
  weather: [{ description: "", icon: "", id: 0, main: "" }],
  wind: { deg: 0, gust: 0, speed: 0 },
};

export const initAirQualityState: IAirQualityType = {
  coord: { lon: 0, lat: 0 },
  list: [
    {
      components: { co: 0, no: 0, no2: 0, o3: 0, so2: 0 },
      dt: 0,
      main: { aqi: 0 },
    },
  ],
};
