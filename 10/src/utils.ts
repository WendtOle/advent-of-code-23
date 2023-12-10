import { AreaMap, Position, TileType } from "./types"

export const isPositionSame = (left: Position, right: Position) => {
    return left.x === right.x && left.y === right.y
}

export const status = (map: AreaMap, position: Position): TileType => map[position.y][position.x];