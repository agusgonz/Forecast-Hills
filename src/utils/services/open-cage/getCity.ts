const getCity = async (lat: number, lon: number) => {
	const response = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
	)
	const data = await response.json()
	return {
		city: data.results[0].components.city,
		state: data.results[0].components.state,
	}
}

export { getCity }
