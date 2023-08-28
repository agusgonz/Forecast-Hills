export function getCurrentHours() {
	const currentDate = new Date()
	let currentTime = currentDate.getHours()
	return currentTime
}
