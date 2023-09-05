import { configureStore } from "@reduxjs/toolkit"
import weatherDataReducer from "./slices/weatherData"
import openWeatherSectionReducer from "./slices/openWeatherSection"
import locationDataReducer from "./slices/locationData"
import isChangeBgModalOpenReducer from "./slices/isChangeBgModalOpen"
import themeReducer from "./slices/theme"

export const store = configureStore({
	reducer: {
		weatherData: weatherDataReducer,
		openWeatherSection: openWeatherSectionReducer,
		locationData: locationDataReducer,
		isChangeBgModalOpen: isChangeBgModalOpenReducer,
		theme: themeReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
