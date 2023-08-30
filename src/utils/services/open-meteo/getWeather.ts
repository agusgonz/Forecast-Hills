import { WeatherDataType } from "WeatherDataModule"

export async function getWeather(lat: number, lon: number) {
	const res = await fetch(
		`/api/fetchWeather?lat=${lat}&lon=${lon}`
	)

	const data = await res.json()

	return {
		current: parseCurrentWeather(data),
		daily: parseDailyWeather(data),
		hourly: parseHourlyWeather(data),
	} as WeatherDataType
}

function parseCurrentWeather({
	current_weather,
	daily,
}: any) {
	const {
		temperature: currentTemp,
		windspeed: windSpeed,
		weathercode: iconCode,
	} = current_weather
	const {
		precipitation_probability_max: [precip],
	} = daily

	return {
		currentTemp: Math.round(currentTemp),
		windSpeed: Math.round(windSpeed),
		precip: Math.round(precip * 100) / 100,
		iconCode,
	}
}

function parseDailyWeather({ daily }: any) {
	return daily.time.map((time: number, index: number) => {
		return {
			timestamp: time * 1000,
			iconCode: daily.weathercode[index],
			maxTemp: Math.round(daily.temperature_2m_max[index]),
			minTemp: Math.round(daily.temperature_2m_min[index]),
		}
	})
}

function parseHourlyWeather({
	hourly,
	current_weather,
}: any) {
	return hourly.time
		.map((time: number, index: number) => {
			return {
				timestamp: time * 1000,
				iconCode: hourly.weathercode[index],
				temp: Math.round(hourly.temperature_2m[index]),
				windSpeed: Math.round(hourly.windspeed_10m[index]),
				precip:
					Math.round(
						hourly.precipitation_probability[index] * 100
					) / 100,
			}
		})
		.filter(
			({ timestamp }: { timestamp: number }) =>
				timestamp >= current_weather.time * 1000
		)
}
