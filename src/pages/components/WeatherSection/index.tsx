import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAirQualityStore, useGetLocation, useWeatherStore } from "src/store/store";
import { date, month } from "src/utils/useDate";

const WeatherSection = () => {
  const { lat, setLat, lon, setLon } = useGetLocation();
  const { weatherData, setWeatherData } = useWeatherStore();
  const { airQuality, setAirQuality } = useAirQualityStore();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude);
      setLat(position.coords.latitude);
    });
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.longitude);
      setLon(position.coords.longitude);
    });

    const getWeather = async () => {
      return await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_W_API_KEY}&units=metric&lang=kr`,
        )
        .then((res) => {
          // console.log(res.data);
          setWeatherData(res.data);
        })
        .catch((e) => console.error(e));
    };

    const getAirQuality = async () => {
      return await axios
        .get(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_W_API_KEY}`,
        )
        .then((res) => {
          // console.log(res.data);
          setAirQuality(res.data);
        })
        .catch((e) => console.error(e));
    };

    getWeather();
    getAirQuality();
  }, [lat, lon]);

  return (
    <div className="md:w-[47%] w-full h-full flex flex-col gap-5 p-5 bg-CARD_BG_DARK rounded-md font-SAM3">
      <div className="w-full h-[55%] flex justify-between gap-5 text-lg">
        <div className="flex flex-col">
          <p className="text-[25px]">
            {month}/{date}
          </p>
          <p>{weatherData?.name}</p>
          <div className="w-full flex gap-3 items-center pt-1.5 -md-1">
            <span
              className={`w-[18px] h-[18px] rounded-full flex items-center justify-center bg-${weatherData?.main.humidity >= 40 && weatherData?.main.humidity <= 55 ? "blue" : weatherData?.main.humidity > 55 && weatherData?.main.humidity <= 65 ? "green" : weatherData?.main.humidity > 65 && weatherData?.main.humidity <= 70 ? "yellow" : weatherData?.main.humidity > 70 && weatherData?.main.humidity <= 75 ? "orange" : "red"}-500`}
            >
              H
            </span>
            <span>{weatherData?.main.humidity}%</span>
          </div>
          <div className="w-full flex gap-3 items-center -mt-0.5">
            <span
              className={`w-[18px] h-[18px] rounded-full flex items-center justify-center bg-${airQuality?.list[0].main.aqi === 1 ? "blue" : airQuality?.list[0].main.aqi === 2 ? "green" : airQuality?.list[0].main.aqi === 3 ? "yellow" : airQuality?.list[0].main.aqi === 4 ? "orange" : "red"}-500`}
            >
              A
            </span>
            <span>
              {airQuality?.list[0].main.aqi === 1
                ? "Good"
                : airQuality?.list[0].main.aqi === 2
                  ? "Fair"
                  : airQuality?.list[0].main.aqi === 3
                    ? "Moderate"
                    : airQuality?.list[0].main.aqi === 4
                      ? "Poor"
                      : "Very Poor"}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="w-[75px] h-[75px]">
            {weatherData?.weather[0].icon && (
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                alt="weather icon"
                width={100}
                height={100}
                priority
              />
            )}
          </div>
          <span className="text-base">{weatherData?.weather[0].description}</span>
        </div>
      </div>
      <div className="h-[50%] flex justify-end items-center text-7xl">
        {Number(weatherData?.main.temp).toFixed(1)}℃
      </div>
    </div>
  );
};

export default WeatherSection;
