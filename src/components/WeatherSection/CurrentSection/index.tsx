import { FC } from "react"
import PrecipProbComp from "./PrecipProbComp"
import CurrentTempComp from "./CurrentTempComp"
import WindSpeedComp from "./WindSpeedComp"

interface NowSectionProps {}

const NowSection: FC<NowSectionProps> = ({}) => {
	return (
		<div className="flex flex-row gap-16 justify-center items-center ">
			{/* Precipitation Probability */}
			<PrecipProbComp hiddeOnMobile />

			{/* Current Temperature */}
			<CurrentTempComp />

			{/* Wind Speed */}
			<WindSpeedComp hiddeOnMobile />
		</div>
	)
}
export default NowSection
