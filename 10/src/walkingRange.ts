import { connectedTiles } from "./connectedTiles"
import { loadAreaMap } from "./loadAreaMap"
import { startPos } from "./startPos"
import { AreaMap, Position } from "./types"

export const walkingRange = (mapFileName: string) => {
    const areaMap = loadAreaMap(mapFileName)
    const paths = getPath(areaMap)
    return (paths.length - 1) / 2
}

const isPositionSame = (left: Position, right: Position) => {
    return left.x === right.x && left.y === right.y
}

export const getPath = (areaMap: AreaMap): Position[] => {
    const startPosition = startPos(areaMap)
    const connected = connectedTiles(areaMap, startPosition)
    const output = connected.map((position) => {
        let current: Position = position
        const path = [startPosition, current]
        while (!isPositionSame(current, startPosition)) {
            const next = getNext(areaMap, path[path.length - 2], current)
            current = next
            path.push(current)
        }
        return path
    })
    return output[0]
}

const getNext = (areaMap: AreaMap, prev: Position, curr: Position): Position => {
    const connected = connectedTiles(areaMap, curr)
    const filtered = connected.filter((potentialNext) => !isPositionSame(potentialNext, prev))
    if (filtered.length !== 1) {
        throw new Error("There is not only one path to follow")
    }
    return filtered[0]
}
