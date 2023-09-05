const folderSrc = (name: string) => {
	return `/images/${name}.jpg`
}

export const Themes = [
	{
		name: "day-1",
		src: folderSrc("day-1"),
		primaryColor: "#135FA0",
		seconaryColor: "#4089c3",
	},
	{
		name: "day-2",
		src: folderSrc("day-2"),
		primaryColor: "#492C24",
		seconaryColor: "#492C24",
	},
	{
		name: "night-1",
		src: folderSrc("night-1"),
		primaryColor: "#011939",
		seconaryColor: "#1a468d",
	},
	{
		name: "night-2",
		src: folderSrc("night-2"),
		primaryColor: "#081332",
		seconaryColor: "#440b2f",
	},
]
