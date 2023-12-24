import { Slope } from "./types"

export const getCoords = (slope: Slope, index: number) => {
    const x = index % slope.width
    const y = Math.floor(index / slope.width)
    return {x, y}
}