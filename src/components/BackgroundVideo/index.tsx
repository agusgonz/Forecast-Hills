"use client"
import { FC } from "react"
import dynamic from "next/dynamic"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { closeWeatherSection } from "@/libs/redux/slices/openWeatherSection"

const ImageComp = dynamic(() => import("./imageComp"), {
	ssr: false,
})

interface indexProps {}

const index: FC<indexProps> = ({}) => {
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
export default index
