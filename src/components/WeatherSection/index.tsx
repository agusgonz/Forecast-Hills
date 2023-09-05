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

interface WeatherSectionProps {}

const WeatherSection: FC<WeatherSectionProps> = ({}) => {
	const dispatch = useAppDispatch()

	const open = useAppSelector(
		state => state.openWeatherSection.value
	)

	const currentTheme = useAppSelector(state => state.theme)

	const handleSectionOnClick = () => {
		dispatch(openWeatherSection())
	}

	const handleCloseButton = () => {
		dispatch(toggleOpenWeatherSection())
	}

	return (
		<div
			className={`${
				open
					? "h-[64vh] rounded-none"
					: "h-[24vh] rounded-t-[80px]"
			} w-full  min-h-[200px] absolute bottom-0 transition-all duration-300  overflow-hidden`}
		>
			<div className="w-full h-full relative text-white ">
				<CloseButton
					onClick={handleCloseButton}
					className={`absolute top-0 left-0 z-10 p-4 ${
						!open && "hidden"
					}`}
				/>
				<div
					onClick={handleSectionOnClick}
					className="h-full"
					style={{
						background: `linear-gradient(to right, ${currentTheme.value.primaryColor}, ${currentTheme.value.seconaryColor})`,
					}}
				>
					<div
						className={`w-full h-full flex flex-col gap-24 py-10 overflow-auto relative  scroll-smooth items-center ${
							!open &&
							"snap-mandatory snap-y overflow-hidden justify-center"
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
				</div>
			</div>
		</div>
	)
}

export default WeatherSection
