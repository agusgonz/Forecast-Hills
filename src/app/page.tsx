"use client"
import BackgroundVideo from "@/components/BackgroundVideo"
import ChangeBackgroundModal from "@/components/ChangeBackgroundModal"
import Navbar from "@/components/Navbar"
import WeatherSection from "@/components/WeatherSection"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { setLocationData } from "@/libs/redux/slices/locationData"
import { setWeatherData } from "@/libs/redux/slices/weatherData"
import { getCity } from "@/utils/services/open-cage/getCity"
import { getWeather } from "@/utils/services/open-meteo/getWeather"
import { useEffect } from "react"

export default function Home() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			positionSuccess,
			positionError
		)

		// if it was successful
		async function positionSuccess(
			coords: GeolocationPosition
		) {
			// get weather from api
			const data = await getWeather(
				coords.coords.latitude,
				coords.coords.longitude
			)
			dispatch(setWeatherData(data))

			// get city from api
			const city = await getCity(
				coords.coords.latitude,
				coords.coords.longitude
			)
			dispatch(setLocationData({ value: city }))
		}

		// if there was an error
		function positionError() {
			alert("There was an error getting your location")
		}
	}, [])

	return (
		<div
			className="relative h-screen
		"
		>
			<Navbar />
			<BackgroundVideo />
			<WeatherSection />
			<ChangeBackgroundModal />
		</div>
	)
}
