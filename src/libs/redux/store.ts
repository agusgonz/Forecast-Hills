import { configureStore } from "@reduxjs/toolkit"
import coordsReducer from "./slices/coords"
import coordsLoaded from "./slices/coordsLoaded"
export const store = configureStore({
	reducer: {
		coords: coordsReducer,
		coordsLoaded: coordsLoaded,
	},
})

export type RootState = ReturnType<typeof store.getState>
