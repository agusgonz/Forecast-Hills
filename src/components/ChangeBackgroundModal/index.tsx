"use client"
import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { FC } from "react"
import CloseButton from "../CloseButton"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { setChangeBgModalOpen } from "@/libs/redux/slices/isChangeBgModalOpen"
import { Themes } from "@/utils/const"
import Image from "next/image"
import { setTheme } from "@/libs/redux/slices/theme"
import ThemeItem from "./ThemeItem"

interface ChangeBackgroundModalProps {}

const ChangeBackgroundModal: FC<
	ChangeBackgroundModalProps
> = ({}) => {
	const dispatch = useAppDispatch()

	const isChangeBgModalOpen = useAppSelector(
		state => state.isChangeBgModalOpen.value
	)

	const currentTheme = useAppSelector(state => state.theme)

	const handleCloseModal = () => {
		dispatch(setChangeBgModalOpen({ value: false }))
	}

	const handleChangeTheme = (newTheme: any) => {
		dispatch(setTheme({ value: newTheme }))
		handleCloseModal()
	}

	if (!isChangeBgModalOpen) return null

	return (
		<div className="absolute top-0 left-0 w-screen h-screen bg-black/70 z-20 text-white p-4">
			<div className="relative h-full flex justify-center items-center">
				<CloseButton
					onClick={handleCloseModal}
					className="absolute top-0 left-0"
				/>
				<div className=" flex gap-4 items-center justify-center flex-wrap">
					{Themes.map(theme => {
						return (
							<ThemeItem
								key={theme.name}
								theme={theme}
								handleChangeTheme={handleChangeTheme}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default ChangeBackgroundModal
