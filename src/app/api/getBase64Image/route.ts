import { NextRequest, NextResponse } from "next/server"
import path from "path"

import lqip from "lqip-modern"

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const imageSrc = searchParams.get("imageSrc")

	const imagePath = path.resolve(`./public/${imageSrc}`)

	const res = await lqip(imagePath)

	return NextResponse.json(res.metadata.dataURIBase64)
}
