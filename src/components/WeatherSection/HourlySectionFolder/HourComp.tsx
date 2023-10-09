import { FC } from "react"
import WithIconDecoration from "../WithIconDecoration"
import Image from "next/image"

interface HourCompProps {
	hour: number
	temp: number
	iconSrc: string
	precProb: number
	windSpeed: number
}

const HourComp: FC<HourCompProps> = ({
	hour,
	temp,
	iconSrc,
	precProb,
	windSpeed,
}) => {
	const HOUR_FORMATTER = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
	})

	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			<p className="text-lg">
				{HOUR_FORMATTER.format(hour)}
			</p>
			<WithIconDecoration
				mainNumber={
					<p className=" text-lg font-light">{temp}°</p>
				}
				icon={
					<div className=" relative w-8 h-8">
						<Image
							src={iconSrc}
							alt="Weather Icon"
							fill
							className="object-contain"
						/>
					</div>
				}
				extraInfo={
					<div className="flex flex-col gap-1 text-[12px] font-light">
						<p>{precProb}% prec prob</p>
						<p>{windSpeed} km/h wind</p>
					</div>
				}
			/>
		</div>
	)
}
export default HourComp
