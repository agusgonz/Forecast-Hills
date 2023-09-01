"use client"
import { useWindowSize } from "@/hooks/useWindowSize"
import { cn } from "@/utils/utils"
import React, { FC, ReactNode } from "react"

interface AdjustWindowSizeProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const AdjustWindowSize: FC<AdjustWindowSizeProps> = ({
	className,
	children,
}) => {
	const windowSize = useWindowSize()

	return (
		<div
			style={{
				width: windowSize.windowWidth,
			}}
			// className={cn(
			// 	className,
			// 	`w-[${windowSize.windowWidth}px]`
			// )}
		>
			{children}
		</div>
	)
}
export default AdjustWindowSize
