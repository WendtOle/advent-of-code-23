export interface Slope {
    slopeString: string, 
    width: number,
    height: number
}

export interface Coords {
    x: number,
    y: number
}

export interface Direction {
    x: number,
    y: number
}

export enum Directions {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export const directionMap: Record<Directions, Direction> = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 }
}

export const slopeDirection: Record<string, Directions> = {
    "^": Directions.UP,
    "v": Directions.DOWN,
    "<": Directions.LEFT,
    ">": Directions.RIGHT
}