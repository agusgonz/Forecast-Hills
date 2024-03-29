import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import ReduxProvider from "@/libs/redux/provider/ReduxProvider"

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
	title: "Weather App",
	description: "Weather App",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
