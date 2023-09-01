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
		closeOpenWeatherSection: state => {
			state.value = false
		},
		openOpenWeatherSection: state => {
			state.value = true
		},
	},
})

export const {
	toggleOpenWeatherSection,
	closeOpenWeatherSection,
	openOpenWeatherSection,
} = openWeatherSectionSlice.actions
export default openWeatherSectionSlice.reducer
