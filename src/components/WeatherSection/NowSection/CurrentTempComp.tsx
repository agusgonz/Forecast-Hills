"use client"
import { FC } from "react"
import WithIconDecoration from "../WithIconDecoration"
import CloudIcon from "../../../../public/weather/cloudy.svg"
import Image from "next/image"
import useGetWeather from "@/hooks/useGetWeather"

interface CurrentTempCompProps {}

const CurrentTempComp: FC<CurrentTempCompProps> = () => {
	const { current } = useGetWeather()

	return (
		<>
			<WithIconDecoration
				mainNumber={
					<div className="text-7xl font-extralight">
						{current.currentTemp || "18"}°
					</div>
				}
				icon={
					<Image
						src={CloudIcon}
						alt={""}
						className="w-[70px] h-[70px]"
					/>
				}
				extraInfo={
					<div className="text-center flex flex-col gap-1">
						<div className="flex justify-center gap-2">
							<div>
								min: <span className="font-light">10°</span>
							</div>
							<div>
								max: <span className="font-light">32°</span>
							</div>
						</div>
					</div>
				}
			/>
		</>
	)
}
export default CurrentTempComp
