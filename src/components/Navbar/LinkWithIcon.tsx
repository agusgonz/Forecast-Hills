import { MoveUpRight } from "lucide-react"
import { FC, ReactNode } from "react"

interface LinkWithIconProps {
	children: ReactNode
	link: string
}

const LinkWithIcon: FC<LinkWithIconProps> = ({
	children,
	link,
}) => {
	return (
		<a
			target="_blank"
			href={link}
		>
			<div className="flex gap-1 justify-end items-center">
				{children}
				<MoveUpRight className="w-3 h-3 mb-1" />
			</div>
		</a>
	)
}
export default LinkWithIcon
