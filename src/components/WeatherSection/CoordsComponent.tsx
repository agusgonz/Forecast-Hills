"use client"
import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCoords } from "@/libs/redux/slices/coords"
import { setCoordsLoaded } from "@/libs/redux/slices/coordsLoaded"

interface CoordsComponentProps {}

const CoordsComponent: FC<CoordsComponentProps> = ({}) => {
	const dispatch = useDispatch()

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			positionSuccess,
			positionError
		)

		async function positionSuccess(
			coords: GeolocationPosition
		) {
			dispatch(
				setCoords({
					currentLat: coords.coords.latitude,
					currentLon: coords.coords.longitude,
				})
			)
			dispatch(setCoordsLoaded())
		}

		function positionError() {
			alert("There was an error getting your location")
		}
	}, [])

	return <></>
}
export default CoordsComponent
