"use client"
import { FC } from "react"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import HourComp from "./HourComp"

interface HourlySectionProps {}

const HourlySection: FC<HourlySectionProps> = ({}) => {
	const weatherData = useAppSelector(
		state => state.weatherData
	)

	return (
		<>
			<div className="grid grid-cols-3 md:grid-cols-6 2xl:grid-cols-12 gap-4 py-10 md:gap-6 items-center justify-center md:justify-evenly ">
				{weatherData.value?.hourly.map(
					(hourData, index) => {
						if (index > 23) return

						return (
							<HourComp
								key={hourData.timestamp}
								hour={hourData.timestamp}
								temp={hourData.temp}
								iconSrc={hourData.iconSrc}
								precProb={hourData.precip}
								windSpeed={hourData.windSpeed}
							/>
						)
					}
				)}
			</div>
		</>
	)
}
export default HourlySection
