import { getCoords } from "./getCoords"
import { Slope } from "./types"

export const findStart = (slope: Slope) => {
    const entranceIndex = slope.slopeString.indexOf(".")
    return getCoords(slope, entranceIndex)
}   