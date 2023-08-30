import { createSlice } from "@reduxjs/toolkit"

const coordsLoadedSlice = createSlice({
	name: "coordsLoaded",
	initialState: { value: false },
	reducers: {
		setCoordsLoaded: state => {
			state.value = true
		},
	},
})

export const { setCoordsLoaded } = coordsLoadedSlice.actions
export default coordsLoadedSlice.reducer
