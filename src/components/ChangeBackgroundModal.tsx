import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { FC } from "react"
import CloseButton from "./CloseButton"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { setChangeBgModalOpen } from "@/libs/redux/slices/isChangeBgModalOpen"
import { Themes } from "@/utils/const"
import Image from "next/image"

interface ChangeBackgroundModalProps {}

const ChangeBackgroundModal: FC<
	ChangeBackgroundModalProps
> = ({}) => {
	const dispatch = useAppDispatch()

	const isChangeBgModalOpen = useAppSelector(
		state => state.isChangeBgModalOpen.value
	)

	const handleCloseButton = () => {
		dispatch(setChangeBgModalOpen({ value: false }))
	}

	if (!isChangeBgModalOpen) return null

	return (
		<div className="absolute top-0 left-0 w-screen h-screen bg-black/70 z-20 text-white p-4">
			<div className="relative h-full flex justify-center items-center">
				<CloseButton
					onClick={handleCloseButton}
					className="absolute top-0 left-0"
				/>
				<div className=" flex gap-4 items-center justify-center flex-wrap">
					{Themes.map(theme => {
						return (
							<div
								key={theme.name}
								className="flex flex-col justify-center"
							>
								<div className="relative w-36 h-36 bg-red-600">
									{/* <Image
										src={`/images/${theme.name}.jpg`}
										alt={"Background Image"}
										fill
										sizes="50vw"
										style={{
											objectFit: "cover",
										}}
									/> */}
								</div>
								<div
									className={`h-2 bg-gradient-to-r from-${theme.primaryColor} to-${theme.seconaryColor}`}
									style={{
										background: `linear-gradient(to right, ${theme.primaryColor}, ${theme.seconaryColor})`,
									}}
								></div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default ChangeBackgroundModal
