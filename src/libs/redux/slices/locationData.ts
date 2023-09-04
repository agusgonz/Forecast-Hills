import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"

interface locationDataType {
	value:
		| {
				city: string
				state: string
		  }
		| undefined
}

const initialState: locationDataType = {
	value: undefined,
}

const locationDataSlice = createSlice({
	name: "locationData",
	initialState: initialState,
	reducers: {
		setLocationData: (
			state,
			action: PayloadAction<locationDataType>
		) => {
			state.value = {
				city: action.payload.value!.city,
				state: action.payload.value!.state,
			}
		},
	},
})

export const { setLocationData } = locationDataSlice.actions
export default locationDataSlice.reducer
