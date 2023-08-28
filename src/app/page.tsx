import BackgroundVideo from "@/components/BackgroundVideo"
import WeatherSection from "@/components/WeatherSection"

export default function Home() {
	return (
		<div>
			<div className="h-[65vh]">
				<BackgroundVideo />
			</div>
			<div className="h-[35vh]">
				<WeatherSection />
			</div>
		</div>
	)
}
