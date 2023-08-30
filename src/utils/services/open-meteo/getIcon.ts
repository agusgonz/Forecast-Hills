import { ICON_MAP } from "./iconMap"

export function getIconUrl(iconCode: number) {
	return `icons/${ICON_MAP.get(iconCode)}.svg`
}
