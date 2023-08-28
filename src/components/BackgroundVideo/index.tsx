"use client"
import { FC, useEffect, useState } from "react"
import ImageComp from "./imageComp"
import day1 from "../../../public/images/day-1.jpg"
import day2 from "../../../public/images/day-2.jpg"
import night1 from "../../../public/images/night-1.jpg"
import night2 from "../../../public/images/night-2.jpg"
import { getCurrentHours } from "@/utils/date"

interface indexProps {}

const index: FC<indexProps> = ({}) => {
	const [image] = useState(() => {
		const hour = getCurrentHours()

		if (hour > 7 && hour < 20) {
			return day1
		} else {
			return night1
		}
	})

	return (
		<>
			<ImageComp image={image} />
		</>
	)
}
export default index
