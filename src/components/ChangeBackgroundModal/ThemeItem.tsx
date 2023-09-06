import Image from "next/image"
import { FC } from "react"

interface ThemeItemProps {
	theme: any
	handleChangeTheme: any
}

const ThemeItem: FC<ThemeItemProps> = ({
	theme,
	handleChangeTheme,
}) => {
	return (
		<div
			onClick={() => handleChangeTheme(theme)}
			className="flex flex-col justify-center cursor-pointer"
		>
			<div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-56">
				<Image
					src={theme.src}
					alt={"Background Image"}
					placeholder="blur"
					blurDataURL={theme.base64Image}
					fill
					sizes="50vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div
				className={`h-2`}
				style={{
					background: `linear-gradient(to right, ${theme.primaryColor}, ${theme.seconaryColor})`,
				}}
			></div>
		</div>
	)
}
export default ThemeItem
