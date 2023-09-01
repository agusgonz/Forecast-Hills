import { cn } from "@/utils/utils"
import React, { FC, ReactNode } from "react"

interface WithIconDecorationProps
	extends React.HTMLAttributes<HTMLDivElement> {
	mainNumber: ReactNode
	icon: any
	withSeparator?: boolean
	extraInfo?: ReactNode
}

const WithIconDecoration: FC<WithIconDecorationProps> = ({
	className,
	mainNumber,
	icon,
	withSeparator = true,
	extraInfo,
}) => {
	return (
		<div className={cn(className, `flex flex-col gap-2`)}>
			<div className="flex gap-2 justify-center">
				<div className="self-center">{mainNumber}</div>
				{withSeparator && (
					<div className="border-r border-white"></div>
				)}
				<div className="self-center">{icon}</div>
			</div>
			<div>{extraInfo}</div>
		</div>
	)
}
export default WithIconDecoration
