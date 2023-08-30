import { RootState } from "@/libs/redux/store"
import {
	TypedUseSelectorHook,
	useSelector,
} from "react-redux"

export const useAppSelector: TypedUseSelectorHook<RootState> =
	useSelector
