export interface NewsContentsType {
  id: number;
  imgSrc?: string;
  headline: string;
  link?: string;
  date: string;
  pressInfo: string;
  content: string;
}

export interface RankingType {
  pressName?: string;
  pressImgSrc?: string;
  pressContent: PressContentType[];
}
export interface PressContentType {
  id: number;
  imgSrc?: string;
  headline: string;
  link?: string;
  viewCount?: string;
}

export interface IWeatherType {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
  timezone: number;
  visibility: number;
  weather: { description: string; icon: string; id: number; main: string }[];
  wind: { deg: number; gust: number; speed: number };
}

export interface IAirQualityType {
  coord: { lon: number; lat: number };
  list: {
    components: { co: number; no: number; no2: number; o3: number; so2: number };
    dt: number;
    main: { aqi: number };
  }[];
}
