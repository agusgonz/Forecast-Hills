import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"

const initialState = {
	value: true,
}

const isFirstTimeSlice = createSlice({
	name: "isFirstTime",
	initialState: initialState,
	reducers: {
		setIsFirstTime: (
			state,
			action: PayloadAction<typeof initialState>
		) => {
			state.value = action.payload.value
		},
	},
})

export const { setIsFirstTime } = isFirstTimeSlice.actions
export default isFirstTimeSlice.reducer
