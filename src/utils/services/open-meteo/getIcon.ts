import { ICON_MAP } from "./iconMap"

export function getIconUrl(iconCode: number) {
	return `/weather/${ICON_MAP.get(iconCode)}.svg`
}
