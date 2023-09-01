"use client"
import { FC, useEffect } from "react"
import CurrentSection from "./CurrentSectionFolder/CurrentSection"
import CurrentSectionMobile from "./CurrentSectionFolder/CurrentSectionMobile"
import DailySection from "./DailySectionFolder/DailySection"
import HourlySection from "./HourlySectionFolder/HourlySection"
import { getWeather } from "@/utils/services/open-meteo/getWeather"
import { setWeatherData } from "@/libs/redux/slices/weatherData"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { openWeatherSection } from "@/libs/redux/slices/openWeatherSection"
import Arrow from "./Arrow"

interface WeatherSectionProps {}

const WeatherSection: FC<WeatherSectionProps> = ({}) => {
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
			{/* <Arrow /> */}
			<div
				onClick={handleSectionOnClick}
				className="h-full bg-gradient-to-t from-[#1a468d] to-[#011939] text-white "
			>
				<div
					className={`w-full h-full flex flex-col gap-24 py-10 overflow-auto   scroll-smooth items-center ${
						!open &&
						"snap-mandatory snap-y overflow-hidden justify-center"
					}`}
				>
					<div className="snap-center">
						<CurrentSection />
					</div>
					{/* For mobile */}
					<div
						className={`${!open && "hidden"} md:hidden `}
					>
						<CurrentSectionMobile />
					</div>

					<div className={`${!open && "hidden"}`}>
						<DailySection />
					</div>

					<div className={`${!open && "hidden"} `}>
						<HourlySection />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherSection
