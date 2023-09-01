"use client"
import Image, { StaticImageData } from "next/image"
import React, { useState } from "react"
import day1 from "../../../public/images/day-1.jpg"
import day2 from "../../../public/images/day-2.jpg"
import night1 from "../../../public/images/night-1.jpg"
import night2 from "../../../public/images/night-2.jpg"
import { getCurrentHours } from "@/utils/utils"

import { FC } from "react"

interface imageCompProps {}

const index: FC<imageCompProps> = () => {
	const [image] = useState(() => {
		const hour = getCurrentHours()

		if (hour > 7 && hour < 20) {
			return day1
		} else {
			return night1
		}
	})

	return (
		<div className="relative w-full h-full">
			<Image
				alt="Mountains"
				src={night1}
				placeholder="blur"
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
export default index
