import { FC } from "react"
import ImageComp from "./ImageComponent"
import lqip from "lqip-modern"

// const ImageComp = dynamic(
// 	() => import("./ImageComponent"),
// 	{
// 		ssr: false,
// 	}
// )

interface BackgroundVideoProps {}

const BackgroundVideo: FC<BackgroundVideoProps> = ({}) => {
	return (
		<div className="w-full h-full">
			<ImageComp />
		</div>
	)
}
export default BackgroundVideo
