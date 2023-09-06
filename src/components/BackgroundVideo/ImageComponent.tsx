"use client"
import Image from "next/image"
import React from "react"
import { FC } from "react"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { closeWeatherSection } from "@/libs/redux/slices/openWeatherSection"
import { setIsFirstTime } from "@/libs/redux/slices/isFirstTime"

interface ImageComponentProps {}

const ImageComponent: FC<ImageComponentProps> = ({}) => {
	const dispatch = useAppDispatch()

	const handleSectionOnClick = () => {
		dispatch(closeWeatherSection())
		dispatch(setIsFirstTime({ value: false }))
	}
	const currentTheme = useAppSelector(
		state => state.theme.value
	)
	const open = useAppSelector(
		state => state.openWeatherSection.value
	)
	return (
		<div
			className={`relative w-full h-full ${
				open && "cursor-pointer"
			}`}
			onClick={handleSectionOnClick}
		>
			<Image
				alt="Mountains"
				src={currentTheme.src}
				placeholder="blur"
				blurDataURL={currentTheme.base64Image}
				quality={100}
				fill
				sizes="100vw"
				style={{
					objectFit: "cover",
				}}
			/>
		</div>
	)
}
export default ImageComponent
