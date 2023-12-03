import { FC } from "react"
import CurrentSection from "./CurrentSectionFolder/CurrentSection"
import CurrentSectionMobile from "./CurrentSectionFolder/CurrentSectionMobile"
import DailySection from "./DailySectionFolder/DailySection"
import HourlySection from "./HourlySectionFolder/HourlySection"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import {
	openWeatherSection,
	toggleOpenWeatherSection,
} from "@/libs/redux/slices/openWeatherSection"
import CloseButton from "../CloseButton"
import Arrow from "./Arrow"
import { setIsFirstTime } from "@/libs/redux/slices/isFirstTime"

interface WeatherSectionProps {}

const WeatherSection: FC<WeatherSectionProps> = ({}) => {
	const dispatch = useAppDispatch()

	const open = useAppSelector(
		state => state.openWeatherSection.value
	)

	const currentTheme = useAppSelector(state => state.theme)

	const weatherData = useAppSelector(
		state => state.weatherData
	)

	const handleOpenSection = () => {
		if (!weatherData.value) return
		dispatch(openWeatherSection())
	}

	const handleCloseButton = () => {
		dispatch(toggleOpenWeatherSection())
		dispatch(setIsFirstTime({ value: false }))
	}

	return (
		<div className="absolute bottom-0 w-full">
			<Arrow />
			<div
				className={`${
					open
						? "h-[64vh] rounded-none "
						: "h-[24vh] rounded-t-[80px] cursor-pointer"
				} w-full  min-h-[200px] relative  transition-all duration-300  overflow-hidden text-white`}
			>
				<CloseButton
					onClick={handleCloseButton}
					className={`absolute top-0 left-0 z-10 p-4  ${
						!open && "hidden"
					}`}
				/>
				<button
					onClick={handleOpenSection}
					className="h-full w-full"
					style={{
						background: `linear-gradient(to right, ${currentTheme.value.primaryColor}, ${currentTheme.value.seconaryColor})`,
					}}
				>
					<div
						className={`w-full h-full flex flex-col gap-24 py-10 overflow-auto relative  scroll-smooth items-center ${
							!open &&
							"snap-mandatory snap-y overflow-hidden justify-center "
						}${
							!weatherData.value &&
							" animate-pulse blur-[2px]"
						}`}
					>
						<div className="snap-center">
							<CurrentSection />
						</div>
						{/* For mobile */}
						<div
							className={`${!open && "hidden"} md:hidden `}
						>
							<CurrentSectionMobile />
						</div>

						<div className={`${!open && "hidden"}`}>
							<DailySection />
						</div>

						<div className={`${!open && "hidden"} `}>
							<HourlySection />
						</div>
					</div>
				</button>
			</div>
		</div>
	)
}

export default WeatherSection
