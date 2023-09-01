declare module "WeatherDataModule" {
	interface WeatherDataType {
		current: CurrentData
		daily: DailyData[]
		hourly: HourlyData[]
	}

	interface CurrentData {
		currentTemp: number
		iconSrc: string
		precip: number
		windSpeed: number
		isDay: number
	}
	interface DailyData {
		iconSrc: string
		maxTemp: number
		minTemp: number
		timestamp: number
	}
	interface HourlyData {
		iconSrc: string
		precip: number
		temp: number
		timestamp: number
		windSpeed: number
	}
}
