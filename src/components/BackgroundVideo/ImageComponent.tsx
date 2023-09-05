"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { FC } from "react"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import lqip from "lqip-modern"

interface ImageComponentProps {}

const ImageComponent: FC<ImageComponentProps> = () => {
	const [base64Image, setBase64Image] = useState("")

	const currentTheme = useAppSelector(
		state => state.theme.value
	)

	// useEffect(() => {
	// 	;(async () => {
	// 		const res = await lqip(currentTheme.src)
	// 		setBase64Image(res.metadata.dataURIBase64)
	// 	})()
	// }, [currentTheme])

	return (
		<div className="relative w-full h-full">
			<Image
				alt="Mountains"
				src={currentTheme.src}
				// placeholder="blur"
				// blurDataURL={base64Image}
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
