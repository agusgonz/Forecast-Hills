import { Themes } from "@/utils/const"
import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"

const initialState = {
	value: Themes[0],
}

const themeSlice = createSlice({
	name: "theme",
	initialState: initialState,
	reducers: {
		setTheme: (
			state,
			action: PayloadAction<typeof initialState>
		) => {
			state.value = action.payload.value
		},
	},
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
