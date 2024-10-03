import { City, Country } from "country-state-city";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { Card, Metric, Text } from "@tremor/react";
import moment from "moment/moment";

function Sidebar() {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedCity, setSelectedCity] = useState({});
  const [weatherDetails, setWeatherDetails] = useState([]);
  useEffect(() => {
    setAllCountries(
      Country.getAllCountries().map((country) => ({
        value: {
          name: country.name,
          latitude: country.latitude,
          longitude: country.longitude,
          isoCode: country.isoCode,
        },
        label: country.name,
      }))
    );
  }, []);

  const handleSelectedCountry = (option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option) => {
    setSelectedCity(option);
  };

  const getWeatherDetails = async (e) => {
    e.preventDefault();

    const fetchWeather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.value.latitude}&longitude=${selectedCity.value.longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,surface_pressure,windspeed_180m,winddirection_180m,temperature_180m,soil_temperature_54cm,soil_moisture_27_81cm,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=GMT`
    );

    const data = await fetchWeather.json();

    setWeatherDetails(data);
  };

  console.log(weatherDetails);

  return (
    <div className="max-w-[1240px] mx-auto flex ">
      <div className="max-w-[1240px] flex flex-col space-y-5 bg-blue-950 h-5/6  p-2">
        <div className="flex flex-col justify-center space-y-5 min-w-sm">
          <Select
            options={allCountries}
            value={selectedCountry}
            onChange={handleSelectedCountry}
          />

          <Select
            options={City.getCitiesOfCountry(
              selectedCountry?.value?.isoCode
            ).map((city) => ({
              value: {
                latitude: city.latitude,
                longitude: city.longitude,
                name: city.name,
              },
              label: city.name,
            }))}
            value={selectedCity}
            onChange={handleSelectedCity}
          />

          <button
            onClick={getWeatherDetails}
            className="bg-green-400 w-full py-3 rounded-lg text-white text-sm font-bold hover:scale-105 transition-all duration-200 ease-in-out"
          >
            Sprawdź pogodę
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-white text-lg font-semibold">
            {selectedCountry?.label} | {selectedCity?.label}
          </p>
          <p className="text-white">
          Szerokość geograficzna: {selectedCity?.value?.latitude} | Długość geograficzna:
            {selectedCity?.value?.longitude}
          </p>
        </div>
        <div className="flex items-center space-x-5 text-white">
          <p>
            <WbSunnyIcon />
            {moment(
              new Date(weatherDetails?.daily?.sunrise[0]).getTime()
            ).format("LT")}
          </p>

          <p>
            <NightlightRoundIcon />
            {moment(
              new Date(weatherDetails?.daily?.sunset[0]).getTime()
            ).format("LT")}
          </p>
        </div>
      </div>
      <div className="w-[55%] h-[55%]">
        <div className="flex flex-col items-center justify-evenly space-x-1 space-y-2 ">
          <Card
            decoration="top"
            decorationColor="red"
            className=" !bg-gray-100 !text-center"
          >
            <Text className="!font-semibold !text-xl">Maksymalna Temperatura</Text>
            <Metric className="!text-black !font-bold">
              {weatherDetails?.daily?.apparent_temperature_max[0]} &#x2103;
            </Metric>
          </Card>
          <Card
            decoration="top"
            decorationColor="green"
            className="max-w-[1240px] !bg-gray-100 !text-center"
          >
            <Text className="!font-semibold !text-xl">Minimalna Temperatura</Text>
            <Metric className="!text-black !font-bold">
              {weatherDetails?.daily?.apparent_temperature_min[0]} &#x2103;
            </Metric>
          </Card>
          <Card
            decoration="top"
            decorationColor="blue"
            className="max-w-[1240px] !bg-gray-100 !text-center"
          >
            <Text className="!font-semibold !text-xl">Kierunek Wiatru</Text>
            <Metric className="!text-black !font-bold">
              {weatherDetails?.daily?.winddirection_10m_dominant[0]} &#176;
            </Metric>
          </Card>
          <Card
            decoration="top"
            decorationColor="blue"
            className="max-w-[1240px] !bg-gray-100 !text-center"
          >
            <Text className="!font-semibold !text-xl">Prędkość Wiatru</Text>
            <Metric className="!text-black !font-bold">
              {weatherDetails?.daily?.windspeed_10m_max[0]} km/h
            </Metric>
          </Card>
          <Card
            decoration="top"
            decorationColor="blue"
            className="max-w-[1240px] !bg-gray-100 !text-center"
          >
            <Text className="!font-semibold !text-xl">Porywy Wiatru</Text>
            <Metric className="!text-black !font-bold">
              {weatherDetails?.daily?.windgusts_10m_max[0]} km/h
            </Metric>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;