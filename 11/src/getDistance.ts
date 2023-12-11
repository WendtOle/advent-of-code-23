import { DistanceWithJumps, JumpMarks, Position } from "./types";

export const getDistance = (firstPosition: Position, secondPosition: Position, jumpMarks: JumpMarks): DistanceWithJumps => {
    const {x: x1, y: y1}: Position = firstPosition;
    const {x: x2, y: y2}:  Position = secondPosition;
    const verticalJumps = jumpMarks.vertical.filter((jumpMark) => jumpMark > Math.min(y1,y2) && jumpMark < Math.max(y1,y2))
    const horizontalJumps = jumpMarks.horizontal.filter((jumpMark) => jumpMark > Math.min(x1,x2) && jumpMark < Math.max(x1,x2))
    const jumps = verticalJumps.length + horizontalJumps.length
    const verticalSteps = Math.abs(y1 - y2)
    const horizontalSteps = Math.abs(x1 - x2)
    const steps = verticalSteps + horizontalSteps

    return {
        jumps,
        steps: steps - jumps
    } 
}