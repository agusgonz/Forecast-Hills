const folderSrc = (name: string) => {
	return `/images/${name}.jpg`
}

export const Themes = [
	{
		name: "day-1",
		src: folderSrc("day-1"),
		primaryColor: "#135FA0",
		seconaryColor: "#4089c3",
		base64Image:
			"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoQAAsABUB8JaACdADvaSlRZAD7mdTSKjdRyULhZBma7Ht+Ecn9dSuY1FJmF4kOZSUjN7J0wHm3OodcCjgAAA==",
	},
	{
		name: "day-2",
		src: folderSrc("day-2"),
		primaryColor: "#492C24",
		seconaryColor: "#492C24",
		base64Image:
			"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAABQAgCdASoQAAsABUB8JbACsH8AGJnEWZivJlAA/sKA4NV5+rz7nXs24GN8j8uGXCjVwch2/WcG49eE4zT+ESavFAAAAA==",
	},
	{
		name: "night-1",
		src: folderSrc("night-1"),
		primaryColor: "#011939",
		seconaryColor: "#1a468d",
		base64Image:
			"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoQAAsABUB8JZgCdAEPEQFdegAA/s3kb31w30jXmOdDnF0IGDHGYf72giECfTa06gsXAIAA",
	},
	{
		name: "night-2",
		src: folderSrc("night-2"),
		primaryColor: "#081332",
		seconaryColor: "#440b2f",
		base64Image:
			"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoQAAsABUB8JQBOgB9EOeHc8AD+wF2NKXExw0+MsGMiuYKIAAA=",
	},
]
