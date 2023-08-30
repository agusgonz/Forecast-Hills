"use client"
import { FC, useEffect } from "react"
import NowSection from "./NowSection"
import NowSectionMobile from "./NowSection/NowSectionMobile"
import { useDispatch } from "react-redux"
import { getWeather } from "@/utils/services/open-meteo/getWeather"
import { setWeatherData } from "@/libs/redux/slices/weatherData"

interface indexProps {}

const index: FC<indexProps> = ({}) => {
	const dispatch = useDispatch()

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
				// set weather in the store
			dispatch(setWeatherData(data))
		}

		// if there was an error
		function positionError() {
			alert("There was an error getting your location")
		}
	}, [])

	return (
		<>
			<div className="h-full bg-gradient-to-r from-[#1C2833] to-[#393727] text-white">
				<div className="w-full h-full flex overflow-auto snap-mandatory snap-x scroll-smooth items-center">
					<div className="snap-center">
						<NowSection />
					</div>
					<div className="snap-center md:hidden">
						<NowSectionMobile />
					</div>
				</div>
			</div>
		</>
	)
}

export default index
