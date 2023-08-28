import { FC } from "react"
import NowSection from "./NowSection"
import NowSectionMobile from "./NowSection/NowSectionMobile"

interface indexProps {}

const index: FC<indexProps> = ({}) => {
	return (
		<div className="h-[40vh] bg-gradient-to-r from-[#1C2833] to-[#393727] text-white">
			<div className="w-full h-full flex overflow-auto snap-mandatory snap-x scroll-smooth items-center">
				<div className="snap-center">
					<NowSection />
				</div>
				<div className="snap-center md:hidden">
					<NowSectionMobile />
				</div>
			</div>
		</div>
	)
}

export default index
