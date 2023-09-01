"use client"
import { FC } from "react"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import DayComp from "./DayComp"

interface indexProps {}

const index: FC<indexProps> = ({}) => {
	const weatherData = useAppSelector(
		state => state.weatherData
	)

	return (
		<>
			<div className="flex md:grid gap-4 sm:gap-10  items-center md:grid-cols-3 xl:grid-cols-6 justify-center md:justify-evenly">
				{weatherData.value?.daily.map((dayData, index) => {
					return (
						<DayComp
							key={dayData.timestamp}
							day={dayData.timestamp}
							iconSrc={dayData.iconSrc}
							maxTemp={dayData.maxTemp}
							minTemp={dayData.minTemp}
						/>
					)
				})}
			</div>
		</>
	)
}
export default index
