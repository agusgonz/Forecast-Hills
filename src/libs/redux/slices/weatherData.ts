import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { WeatherDataType } from "WeatherDataModule"

interface WeatherStore {
	value: undefined | WeatherDataType
}

const initialState: WeatherStore = {
	value: undefined,
}

const weatherDataSlice = createSlice({
	name: "weatherData",
	initialState: initialState,
	reducers: {
		setWeatherData: (
			state,
			action: PayloadAction<WeatherDataType>
		) => {
			state.value = action.payload
		},
	},
})

export const { setWeatherData } = weatherDataSlice.actions
export default weatherDataSlice.reducer
