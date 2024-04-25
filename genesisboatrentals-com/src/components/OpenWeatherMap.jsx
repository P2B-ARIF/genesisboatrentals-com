import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { format } from "date-fns";

const OpenWeatherMap = () => {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=chittagong&appid=98a35f524c606b30e8949ee7cd7818bf`,
		)
			.then(res => res.json())
			.then(result => setWeather(result))
			.catch(err => console.log(err.message, "error message"));
	}, []);

	console.log(weather, "weather");

	return (
		<div className='bg-[#001F43] text-white text-base p-5 mt-20 rounded-lg'>
			{weather && (
				<div className='grid grid-cols-2 gap-5'>
					<div>
						<div className='flex justify-between text-sm'>
							<div className='flex items-start font-bold gap-1'>
								<CiLocationOn className='mt-1' /> {weather?.name},{" "}
								{weather?.sys?.country}
							</div>
							{/* <div>3:13 pm, Apr 21, 2024</div> */}
							<div>{format(new Date(), "h:mm aa, MMM d, yyyy")}</div>
						</div>

						<div className='flex justify-between py-5'>
							<h1 className='text-5xl font-bold flex items-center'>
                                <img src="https://cannons.com/wp-content/plugins/location-weather-pro/assets/images/icons/weather-icons/01d.svg" alt="" />
								{(((weather?.main?.temp - 273.15) * 9) / 5 + 32).toFixed(0)}
								<sup>°F</sup> 
							</h1>
							<h3 className='flex items-center gap-3 text-lg'>
								<span className='text-gray-300'>
									L:{" "}
									{(((weather?.main?.temp_min - 273.15) * 9) / 5 + 32).toFixed(
										0,
									)}
									°
								</span>
								<div className='h-[20px] w-[2px] bg-white'></div>
								<span>
									H:{" "}
									{(((weather?.main?.temp_max - 273.15) * 9) / 5 + 32).toFixed(
										0,
									)}
									°
								</span>
							</h3>
						</div>
						<h1 className='text-left'>
							Feels like{" "}
							{(((weather?.main?.feels_like - 273.15) * 9) / 5 + 32).toFixed(0)}
							°F Clear Sky
						</h1>
					</div>
					<div className='grid grid-cols-2 gap-2 text-sm'>
						<div className='text-left space-y-1'>
							<h5>Humidity: {weather?.main?.humidity} %</h5>
							<h5>Wind: {weather?.wind.speed} mph W</h5>
							<h5>UV Index: 68%</h5>
							<h5>Visibility: {weather?.visibility / 1000} km</h5>
							<h5>
								Sunset:{" "}
								{format(new Date(weather?.sys?.sunset * 1000), "h:mm aa")}
							</h5>
						</div>
						<div className='whitespace-nowrap text-right space-y-1'>
							<h5>Pressure: {weather?.main.pressure} mb</h5>
							<h5>Wind Gust: {weather?.wind.gust} mph</h5>
							<h5>Precipitation: 0.03 inch</h5>
							<h5>
								Sunrise:{" "}
								{format(new Date(weather?.sys?.sunrise * 1000), "h:mm aa")}
							</h5>
						</div>
					</div>
				</div>
			)}
			<hr />
		</div>
	);
};

export default OpenWeatherMap;
