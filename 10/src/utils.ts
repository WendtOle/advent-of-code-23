import { Position } from "./types"

export const isPositionSame = (left: Position, right: Position) => {
    return left.x === right.x && left.y === right.y
}