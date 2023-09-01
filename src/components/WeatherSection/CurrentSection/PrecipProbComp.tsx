import { FC } from "react"
import WithIconDecoration from "../WithIconDecoration"
import Image from "next/image"
import WaterIcon from "../../../../public/weather/water.svg"
import { useAppSelector } from "@/hooks/redux/useAppSelector"

interface PrecipProbCompProps {
	hiddeOnMobile?: boolean
}

const PrecipProbComp: FC<PrecipProbCompProps> = ({
	hiddeOnMobile,
}) => {
	const weatherData = useAppSelector(
		state => state.weatherData
	)

	return (
		<div
			className={`${
				hiddeOnMobile && "hidden md:inline-block"
			}`}
		>
			<WithIconDecoration
				withSeparator={false}
				mainNumber={
					<div className="text-5xl font-extralight">
						{weatherData.value != undefined
							? weatherData.value.current.precip
							: "75"}
						<span className="text-xl pl-1">%</span>
					</div>
				}
				icon={
					<Image
						src={WaterIcon}
						alt={""}
						className="w-[40px] h-[40px]"
					/>
				}
				extraInfo={
					<p className="text-center">Precipitation Prob</p>
				}
			/>
		</div>
	)
}
export default PrecipProbComp
