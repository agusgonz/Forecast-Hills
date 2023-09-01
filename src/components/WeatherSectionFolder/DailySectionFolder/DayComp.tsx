import Image from "next/image"
import { FC } from "react"
import WithIconDecoration from "../WithIconDecoration"

interface DayCompProps {
	day: number
	iconSrc: string
	maxTemp: number
	minTemp: number
}

const DayComp: FC<DayCompProps> = ({
	day,
	iconSrc,
	maxTemp,
	minTemp,
}) => {
	const DAY_FORMATTER_LONG = new Intl.DateTimeFormat(
		"en-US",
		{ weekday: "long" }
	)
	const DAY_FORMATTER_SHORT = new Intl.DateTimeFormat(
		"en-US",
		{ weekday: "short" }
	)

	return (
		<div>
			{/* mobile component */}

			<div className="md:hidden flex flex-col gap-2 justify-center items-center">
				<p>{DAY_FORMATTER_SHORT.format(day)}</p>
				<Image
					src={iconSrc}
					alt="Weather Icon"
					width={32}
					height={32}
				/>
				<p className="font-light">{maxTemp}</p>
				<p className="font-light text-white/80">
					{minTemp}
				</p>
			</div>

			{/* tablet - desktop component */}
			<div className="hidden md:inline-block">
				<div className="flex flex-col gap-2 justify-center items-center">
					<p className="text-lg">
						{DAY_FORMATTER_LONG.format(day)}
					</p>
					<WithIconDecoration
						mainNumber={
							<div className=" text-base">
								<div>
									max:{" "}
									<span className="font-light">
										{maxTemp}°
									</span>
								</div>

								<div>
									min:{" "}
									<span className="font-light">
										{minTemp}°
									</span>
								</div>
							</div>
						}
						icon={
							<div className=" relative w-16 h-16">
								<Image
									src={iconSrc}
									alt="Weather Icon"
									fill
									className="object-contain"
								/>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default DayComp
