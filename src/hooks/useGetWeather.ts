import { getWeather } from "@/utils/services/open-meteo/getWeather"
import { useSelector } from "react-redux"
import { RootState, store } from "@/libs/redux/store"
import { useEffect, useState } from "react"

interface weatherProps {
	current: any
	daily: any
	hourly: any
}

export default function useGetWeather() {
	const { lat, lon } = useSelector(
		(state: RootState) => state.coords
	)
	const coordsLoaded = useSelector(
		(state: RootState) => state.coordsLoaded
	)

	const [weather, setWeather] = useState<weatherProps>({
		current: {},
		daily: [],
		hourly: [],
	})

	useEffect(() => {
		// wait until coords has been loaded
		if (!coordsLoaded.value) return
		;(async () => {
			const data = await getWeather(lat, lon)

			setWeather(data)
		})()
	}, [coordsLoaded.value])

	return weather
}
