import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu"
import { FC, useState } from "react"
import { MoreVertical } from "lucide-react"
import LinkWithIcon from "./LinkWithIcon"
import { useAppDispatch } from "@/hooks/redux/useAppDispatch"
import { setChangeBgModalOpen } from "@/libs/redux/slices/isChangeBgModalOpen"

interface DropDownMenuProps {}

const DropDownMenu: FC<DropDownMenuProps> = ({}) => {
	const dispatch = useAppDispatch()

	const handleChangeBgButton = () => {
		dispatch(setChangeBgModalOpen({ value: true }))
	}

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button>
						<MoreVertical className="w-8 h-8" />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="font-light text-end p-3 m-2 bg-black/70 rounded-md">
					<DropdownMenuGroup className="flex flex-col gap-1">
						<DropdownMenuGroup>
							<DropdownMenuItem className="outline-none">
								<button
									className="cursor-pointer"
									onClick={handleChangeBgButton}
								>
									Change Background
								</button>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<hr className="text-white" />

						<DropdownMenuItem className="outline-none">
							<LinkWithIcon link="https://github.com/agusgonz/weather-app">
								GitHub
							</LinkWithIcon>
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
export default DropDownMenu
