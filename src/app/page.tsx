import BackgroundVideo from "@/components/BackgroundVideo"
import WeatherSection from "@/components/WeatherSection"

export default function Home() {
	return (
		<div>
			<div className="w-full h-screen">
				<BackgroundVideo />
			</div>
			<WeatherSection />
		</div>
	)
}
