import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"

interface CoordsPayload {
	currentLat: number
	currentLon: number
}

const coordsSlice = createSlice({
	name: "coords",
	initialState: { lat: 0, lon: 0 },
	reducers: {
		setCoords: (
			state,
			action: PayloadAction<CoordsPayload>
		) => {
			state.lat = action.payload.currentLat
			state.lon = action.payload.currentLon
		},
	},
})

export const { setCoords } = coordsSlice.actions
export default coordsSlice.reducer
