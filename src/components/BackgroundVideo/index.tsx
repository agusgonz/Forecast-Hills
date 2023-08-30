import { FC } from "react"
import dynamic from "next/dynamic"

const ImageComp = dynamic(() => import("./imageComp"), {
	ssr: false,
})

interface indexProps {}

const index: FC<indexProps> = ({}) => {
	return (
		<>
			<ImageComp />
		</>
	)
}
export default index
