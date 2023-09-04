import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"

const initialState = {
	value: false,
}

const isChangeBgModalOpenSlice = createSlice({
	name: "isChangeBgModalOpen",
	initialState: initialState,
	reducers: {
		setChangeBgModalOpen: (
			state,
			action: PayloadAction<typeof initialState>
		) => {
			state.value = action.payload.value
		},
	},
})

export const { setChangeBgModalOpen } =
	isChangeBgModalOpenSlice.actions
export default isChangeBgModalOpenSlice.reducer
