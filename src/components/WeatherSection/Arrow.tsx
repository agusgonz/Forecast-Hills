import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { setIsFirstTime } from "@/libs/redux/slices/isFirstTime"
import { toggleOpenWeatherSection } from "@/libs/redux/slices/openWeatherSection"
import { ArrowDown, ArrowUp } from "lucide-react"
import { FC, useState } from "react"

interface ArrowProps {}

const Arrow: FC<ArrowProps> = ({}) => {
	const dispatch = useAppDispatch()

	const isOpen = useAppSelector(
		state => state.openWeatherSection.value
	)

	const isFirstTime = useAppSelector(
		state => state.isFirstTime.value
	)

	const weatherData = useAppSelector(
		state => state.weatherData.value
	)

	const handleOnClick = () => {
		dispatch(toggleOpenWeatherSection())
		if (isOpen) {
			dispatch(setIsFirstTime({ value: false }))
		}
	}

	const currentTheme = useAppSelector(state => state.theme)

	if (!weatherData) return

	if (!isFirstTime) return

	return (
		<div
			className={
				" absolute -top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 "
			}
		>
			<div className="animate-slide-arrow">
				<button
					onClick={handleOnClick}
					className=" text-white p-2 rounded-full animate-bounce"
					style={{
						background: `linear-gradient(to right, ${currentTheme.value.primaryColor}, ${currentTheme.value.seconaryColor})`,
					}}
				>
					{isOpen ? <ArrowDown /> : <ArrowUp />}
				</button>
			</div>
		</div>
	)
}
export default Arrow
