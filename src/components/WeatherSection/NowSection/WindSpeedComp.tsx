import { FC } from "react"
import WithIconDecoration from "../WithIconDecoration"
import Image from "next/image"
import WindIcon from "../../../../public/weather/wind.svg"

interface WindSpeedCompProps {
	hiddeOnMobile?: boolean
}

const WindSpeedComp: FC<WindSpeedCompProps> = ({
	hiddeOnMobile,
}) => {
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
						13<span className="text-xl pl-1">km/h</span>
					</div>
				}
				icon={
					<Image
						src={WindIcon}
						alt={""}
						className="w-[40px] h-[40px]"
					/>
				}
				extraInfo={
					<p className="text-center">Wind Speed (10m)</p>
				}
			/>
		</div>
	)
}
export default WindSpeedComp
