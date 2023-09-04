import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { MoreVertical } from "lucide-react"
import { FC } from "react"
import DropDownMenu from "./DropDownMenu"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const location = useAppSelector(
		state => state.locationData.value
	)

	return (
		<div className="w-full absolute z-10 text-white p-4">
			<div className="relative h-8 flex justify-center items-center">
				{location ? (
					<div className="flex gap-2 justify-center">
						<p>{location.city}, </p>
						<p>{location.state}</p>
					</div>
				) : (
					<div>Loading location...</div>
				)}
				<div className="absolute top-0 right-0">
					<DropDownMenu />
				</div>
			</div>
		</div>
	)
}
export default Navbar
