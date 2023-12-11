import { Image, SpaceType, spaceTypeMap } from "./types";
import { readFileSync } from "fs";

export const loadImage = (fileName: string): Image => {
    const data = readFileSync(fileName)
    const stringData = data.toString()
    const image = stringData.split("").reduce((acc: SpaceType[][], tile: string) => {
        if (tile === "\n") {
            return [...acc, []]
        }
        acc[acc.length - 1].push(spaceTypeMap[tile])
        return acc
    }, [[]])
    return image
}