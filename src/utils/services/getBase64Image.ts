export default async function getBase64Image(
	imageSrc: string
) {
	const res = await fetch(
		`/api/getBase64Image?imageSrc=${imageSrc}`
	)

	const data = await res.json()

	return data
}
