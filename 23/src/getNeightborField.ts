import { Coords, Direction, Slope } from "./types";

export const getNeightbourField = (slope: Slope, coords: Coords, direction: Direction) => {
    const { x, y } = coords;
    const { width, height } = slope;
    if (x + direction.x < 0 || y + direction.y < 0) {
        return undefined;
    }
    const newX = (x + direction.x + width) % width;
    const newY = (y + direction.y + height) % height;
    return { x: newX, y: newY };
}