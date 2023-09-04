import { cn } from "@/utils/utils"
import { X } from "lucide-react"
import { FC, HTMLAttributes } from "react"

interface CloseButtonProps
	extends HTMLAttributes<HTMLButtonElement> {}

const CloseButton: FC<CloseButtonProps> = ({
	className,
	...onClick
}) => {
	return (
		<button
			{...onClick}
			className={cn(className, ``)}
		>
			<X />
		</button>
	)
}
export default CloseButton
