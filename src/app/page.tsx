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
		<div
			className="relative h-screen bg-black
		"
		>
			<div
				className={`${
					open ? "h-[30vh]" : "h-[76vh]"
				} transition-all duration-300`}
			>
				<BackgroundVideo />
			</div>
			<div
				className={`${
					open ? "h-[70vh]" : "h-[24vh]"
				} w-full  min-h-[200px] absolute bottom-0 transition-all duration-300`}
			>
				<WeatherSection />
			</div>
		</div>
	)
}
