import { useAppSelector } from "@/hooks/redux/useAppSelector"
import { MoreVertical } from "lucide-react"
import { FC } from "react"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const location = useAppSelector(
		state => state.locationData.value
	)

	return (
		<div className="w-full absolute z-10 text-white p-2">
			<div className="relative ">
				{location ? (
					<div className="flex gap-2 justify-center">
						<p>{location.city}, </p>
						<p>{location.state}</p>
					</div>
				) : (
					<div>Loading location...</div>
				)}
				<div className="absolute top-0 right-0">
					<MoreVertical />
				</div>
			</div>
		</div>
	)
}
export default Navbar
