import { FC } from "react"
import PrecipProbComp from "./PrecipProbComp"
import WindSpeedComp from "./WindSpeedComp"

interface NowSectionMobileProps {}

const CurrentSectionMobile: FC<
	NowSectionMobileProps
> = ({}) => {
	return (
		<div className="flex flex-row gap-10 sm:gap-16 justify-center items-center">
			{/* Precipitation Probability */}
			<PrecipProbComp />

			{/* Wind Speed */}
			<WindSpeedComp />
		</div>
	)
}
export default CurrentSectionMobile
