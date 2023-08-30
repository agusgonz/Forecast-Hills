declare module "WeatherDataModule" {
	interface WeatherDataType {
		current: {
			currentTemp: number
			iconCode: number
			precip: number
			windSpeed: number
		}
		daily: DailyData[]
		hourly: HourlyData[]
	}

	interface DailyData {
		iconCode: number
		maxTemp: number
		minTemp: number
		timestamp: number
	}
	interface HourlyData {
		iconCode: number
		precip: number
		temp: number
		timestamp: number
		windSpeed: number
	}
}
