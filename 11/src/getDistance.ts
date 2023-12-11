import { Position } from "./types";

export const getDistance = (firstPosition: Position, secondPosition: Position): number => {
    const {x: x1, y: y1}: Position = firstPosition;
    const {x: x2, y: y2}:  Position = secondPosition;
    const verticalDistance = Math.abs(y1 - y2)
    const horizontalDistance = Math.abs(x1 - x2)
    //console.log({x1, x2, y1, y2})
    return verticalDistance + horizontalDistance
}