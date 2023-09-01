import { configureStore } from "@reduxjs/toolkit"
import weatherDataReducer from "./slices/weatherData"
import openWeatherSectionReducer from "./slices/openWeatherSection"

export const store = configureStore({
	reducer: {
		weatherData: weatherDataReducer,
		openWeatherSection: openWeatherSectionReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
