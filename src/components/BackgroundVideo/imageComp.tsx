import Image, { StaticImageData } from "next/image"
import React from "react"

import { FC } from "react"

interface imageCompProps {
	image: StaticImageData
}

const index: FC<imageCompProps> = ({ image }) => {
	return (
			<div className="relative w-full h-full">
				<Image
					alt="Mountains"
					src={image}
					placeholder="blur"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
	)
}
export default index
