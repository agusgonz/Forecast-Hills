"use client"
import { FC } from "react"
import dynamic from "next/dynamic"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { closeWeatherSection } from "@/libs/redux/slices/openWeatherSection"

const ImageComp = dynamic(
	() => import("./ImageComponent"),
	{
		ssr: false,
	}
)

interface BackgroundVideoProps {}

const BackgroundVideo: FC<BackgroundVideoProps> = ({}) => {
	const dispatch = useAppDispatch()

	const handleSectionOnClick = () => {
		dispatch(closeWeatherSection())
	}

	return (
		<div
			onClick={handleSectionOnClick}
			className="w-full h-full"
		>
			<ImageComp />
		</div>
	)
}
export default BackgroundVideo
