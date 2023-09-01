import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"

const openWeatherSectionSlice = createSlice({
	name: "openWeatherSection",
	initialState: { value: false },
	reducers: {
		toggleOpenWeatherSection: state => {
			state.value = !state.value
		},
		closeWeatherSection: state => {
			state.value = false
		},
		openWeatherSection: state => {
			state.value = true
		},
	},
})

export const {
	toggleOpenWeatherSection,
	closeWeatherSection,
	openWeatherSection,
} = openWeatherSectionSlice.actions
export default openWeatherSectionSlice.reducer
