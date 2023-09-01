"use client"
import { FC, useEffect } from "react"
import CurrentSection from "./CurrentSection"
import CurrentSectionMobile from "./CurrentSection/CurrentSectionMobile"
import { getWeather } from "@/utils/services/open-meteo/getWeather"
import { setWeatherData } from "@/libs/redux/slices/weatherData"
import DailySection from "./DailySection"
import HourlySection from "./HourlySection"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { openWeatherSection } from "@/libs/redux/slices/openWeatherSection"
import Arrow from "./Arrow"

interface indexProps {}

const index: FC<indexProps> = ({}) => {
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
			// set weather in the store
			dispatch(setWeatherData(data))
		}

		// if there was an error
		function positionError() {
			alert("There was an error getting your location")
		}
	}, [])

	const open = useAppSelector(
		state => state.openWeatherSection.value
	)

	const handleSectionOnClick = () => {
		dispatch(openWeatherSection())
	}

	return (
		<div className="w-full h-full relative">
			<Arrow />
			<div
				onClick={handleSectionOnClick}
				className="h-full bg-gradient-to-r from-[#1C2833] to-[#393727] text-white "
			>
				<div
					className={`w-full h-full flex flex-col gap-24 pt-16 overflow-auto  scroll-smooth items-center ${
						!open &&
						"snap-mandatory snap-y overflow-hidden "
					}`}
				>
					<div className="snap-center">
						<CurrentSection />
					</div>
					{/* For mobile */}
					<div className=" md:hidden">
						<CurrentSectionMobile />
					</div>

					<div className=" ">
						<DailySection />
					</div>

					<div className="">
						<HourlySection />
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
