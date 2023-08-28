import { FC } from "react"
import PrecipProbComp from "./PrecipProbComp"
import WindSpeedComp from "./WindSpeedComp"
import AdjustWindowSize from "../AdjustWindowSize"

interface NowSectionMobileProps {}

const NowSectionMobile: FC<
	NowSectionMobileProps
> = ({}) => {
	return (
		<AdjustWindowSize>
			<div className="flex flex-row gap-16 justify-center items-center w-screen">
				{/* Precipitation Probability */}
				<PrecipProbComp />

				{/* Wind Speed */}
				<WindSpeedComp />
			</div>
		</AdjustWindowSize>
	)
}
export default NowSectionMobile
