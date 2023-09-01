import { ICON_MAP } from "./iconMap"

export default function getIconUrl(iconCode: number) {
	return `/weather/${ICON_MAP.get(iconCode)}.svg`
}
