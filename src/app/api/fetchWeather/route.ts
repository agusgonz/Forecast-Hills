import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const lat = searchParams.get("lat")
	const lon = searchParams.get("lon")

	const timezone =
		Intl.DateTimeFormat().resolvedOptions().timeZone

	const res = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current_weather=true&timeformat=unixtime&timezone=${timezone}`
	)

	const data = await res.json()

	return NextResponse.json(data)
}
