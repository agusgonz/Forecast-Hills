export const ICON_MAP = new Map()

addMapping([0, 1], "sun")
addMapping([2, 3, 45, 48], "cloudy")
addMapping([51, 53, 55, 56, 57], "rain")
addMapping([61, 63, 65, 66, 67, 80, 81, 82], "heavy-rain")
addMapping([71, 73, 75, 77, 85, 86], "snow")
addMapping([95, 96, 99], "storm")

function addMapping(values: number[], icon: string) {
	values.forEach(value => {
		ICON_MAP.set(value, icon)
	})
}
