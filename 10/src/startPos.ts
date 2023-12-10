import { AreaMap, Position, TileType } from "./types"

export const startPos = (areaMap: AreaMap): Position => {
    for (let y = 0; y < areaMap.length; y++) {
        for (let x = 0; x < areaMap[y].length; x++) {
            if (areaMap[y][x] === TileType.START) {
                return {x, y}
            }
        }
    }
    throw new Error("No start position found")
}