import { FC } from "react"
import PrecipProbComp from "./PrecipProbComp"
import CurrentTempComp from "./CurrentTempComp"
import WindSpeedComp from "./WindSpeedComp"
import AdjustWindowSize from "../AdjustWindowSize"
import { useSelector } from "react-redux"
import { RootState } from "@/libs/redux/store"

interface NowSectionProps {}

const NowSection: FC<NowSectionProps> = ({}) => {
	return (
		<AdjustWindowSize>
			<div className="flex flex-row gap-16 justify-center items-center w-screen">
				{/* Precipitation Probability */}
				<PrecipProbComp hiddeOnMobile />

				{/* Current Temperature */}
				<CurrentTempComp />

				{/* Wind Speed */}
				<WindSpeedComp hiddeOnMobile />
			</div>
		</AdjustWindowSize>
	)
}
export default NowSection
