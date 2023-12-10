import { AreaMap, TileType, tileTypeChar } from "./types"
import {readFileSync} from "fs"


export const loadAreaMap = (mapFileName: string): AreaMap => {
    const data = readFileSync(mapFileName)
    const stringData = data.toString()
    const tileTypeData = stringData.split("").reduce((acc: TileType[][], tile: string) => {
        if (tile === "\n") {
            return [...acc, []]
        }
        acc[acc.length - 1].push(tileTypeChar[tile])
        return acc
    }, [[]])
    return tileTypeData
}