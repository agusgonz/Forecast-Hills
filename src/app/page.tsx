"use client"
import BackgroundVideo from "@/components/BackgroundVideo"
import WeatherSection from "@/components/WeatherSection"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { toggleOpenWeatherSection } from "@/libs/redux/slices/openWeatherSection"
import { useState } from "react"

export default function Home() {
	const open = useAppSelector(
		state => state.openWeatherSection.value
	)

	return (
		<div>
			<div
				className={`${
					open ? "h-[30vh]" : "h-[65vh]"
				} transition-all`}
			>
				<BackgroundVideo />
			</div>
			<div
				className={`${
					open ? "h-[70vh]" : "h-[35vh]"
				} transition-all`}
			>
				<WeatherSection />
			</div>
		</div>
	)
}
