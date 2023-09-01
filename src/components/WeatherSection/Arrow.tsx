import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { toggleOpenWeatherSection } from "@/libs/redux/slices/openWeatherSection"
import { ArrowDown, ArrowUp } from "lucide-react"
import { FC } from "react"

interface ArrowProps {}

const Arrow: FC<ArrowProps> = ({}) => {
	const dispatch = useAppDispatch()

	const handleOnClick = () => {
		dispatch(toggleOpenWeatherSection())
	}

	const isOpen = useAppSelector(
		state => state.openWeatherSection.value
	)

	return (
		<button
			onClick={handleOnClick}
			className="z-10 absolute top-0 left-1/2 text-white p-2 rounded-full bg-gradient-to-r from-[#1C2833] to-[#393727] -translate-x-1/2 -translate-y-1/2"
		>
			{isOpen ? <ArrowDown /> : <ArrowUp />}
		</button>
	)
}
export default Arrow
