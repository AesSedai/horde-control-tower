import { has } from "lodash-es"

type Image = string
interface ImageObj {
    src: Image
    img?: HTMLImageElement
    x?: number | undefined
    y?: number | undefined
    opacity?: number | undefined
}
type ImageSource = Image | ImageObj

export const urlToBase64 = async (source: ImageSource): Promise<string> => {
    const canvas = window.document.createElement("canvas")
    const Image = window.Image

    // Load sources
    const images = (
        await Promise.allSettled(
            [source].map(async (source) => {
                return await new Promise<ImageObj>((resolve, reject) => {
                    // Convert sources to objects
                    let result: ImageObj
                    if (!has(source, "src")) {
                        result = { src: source as Image }
                    } else {
                        result = source as ImageObj
                    }

                    // Resolve source and img when loaded
                    const img = new Image()
                    img.onerror = () => reject(new Error("Couldn't load image"))
                    img.onload = () => resolve({ ...result, img })
                    img.src = result.src
                    img.crossOrigin = "anonymous"
                })
            })
        )
    )
        // Filter to only keep images that resolved. Unresolved images will just have to show up as blanks.
        .filter((value): value is PromiseFulfilledResult<ImageObj> => value.status === "fulfilled")
        .map((value) => value.value)

    // Get canvas context
    const ctx = canvas.getContext("2d")
    if (ctx == null) {
        throw new Error("Couldn't create canvas context")
    } else {
        // Set canvas dimensions when sources have loaded
        const getSize = (dim: "width" | "height"): number => Math.max(...images.map((image) => image?.img?.[dim] ?? 0))
        canvas.width = getSize("width")
        canvas.height = getSize("height")

        // Draw images to canvas
        images.forEach((image) => {
            if (image != null) {
                ctx.globalAlpha = image.opacity != null ? image.opacity : 1
                if (image.img != null) {
                    return ctx.drawImage(image.img, image.x ?? 0, image.y ?? 0)
                }
            }
        })

        return canvas.toDataURL("image/webp")
    }
}
