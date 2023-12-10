import { AreaMap, Direction, Position, TileType, allowedDirectionsPerTileType, directionPositions, directionTileTypes } from "./types"

const getNewPosition = (position: Position, direction: Direction) => {
    const directionPosition = directionPositions[direction]
    return {x: position.x + directionPosition.x, y: position.y + directionPosition.y}
}

const isValidDirection = (areaMap: AreaMap, position: Position)=> (direction: Direction) => {
    const newPosition = getNewPosition(position, direction)
    if (newPosition.x < 0 || newPosition.x >= areaMap[0].length) {
        return false
    }
    if (newPosition.y < 0 || newPosition.y >= areaMap.length) {
        return false
    }
    const tileType = areaMap[newPosition.y][newPosition.x]
    if (tileType === TileType.GROUND) {
        return false
    }
    return true
}

export const connectedTiles = (areaMap: AreaMap, position: Position): Position[] => {
    //console.log("connectedTiles", {areaMap, position})
    const tileType = areaMap[position.y][position.x]
    if (tileType === TileType.GROUND) {
        throw new Error("You on the ground, something went wrong")
    }
    const validDirections = allowedDirectionsPerTileType[tileType].filter((directionString: string) => isValidDirection(areaMap, position)(directionString as Direction))
    const directionsWithConnectedTiles = validDirections.filter((direction) => {
        const newPosition = getNewPosition(position, direction as Direction)
        return directionTileTypes[direction as Direction].includes(areaMap[newPosition.y][newPosition.x])
    })
    return directionsWithConnectedTiles.map((direction) => {
        const directionPosition = directionPositions[direction as Direction]
        return {x: position.x + directionPosition.x, y: position.y + directionPosition.y}
    })
}