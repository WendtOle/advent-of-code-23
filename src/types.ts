export enum TileType {
    NORTH_SOUTH = "north-south",
    EAST_WEST = "east-west",
    NORTH_EAST = "north-east",
    NORTH_WEST = "north-west",
    SOUTH_EAST = "south-east",
    SOUTH_WEST = "south-west",
    GROUND = "ground",
    START = "start"
}

export const tileTypeChar: Record<string, TileType> = {
    "|": TileType.NORTH_SOUTH,
    "-": TileType.EAST_WEST,
    "L": TileType.NORTH_EAST,
    "J": TileType.NORTH_WEST,
    "F": TileType.SOUTH_EAST,
    "7": TileType.SOUTH_WEST,
    ".": TileType.GROUND,
    "S": TileType.START
}

export type AreaMap = TileType[][];

export interface Position {
    x: number;
    y: number;
}

export enum Direction {
    UP = "up",
    RIGHT = "right",
    DOWN = "down",
    LEFT = "left",
}

export const directionPositions: Record<Direction, Position> = {
    [Direction.UP]: {x: 0, y: -1},
    [Direction.RIGHT]: {x: 1, y: 0},
    [Direction.DOWN]: {x: 0, y: 1},
    [Direction.LEFT]: {x: -1, y: 0},
}

export const directionTileTypes: Record<Direction, TileType[]> = {
    [Direction.DOWN]: [TileType.NORTH_SOUTH, TileType.NORTH_EAST, TileType.NORTH_WEST],
    [Direction.RIGHT]: [TileType.EAST_WEST, TileType.NORTH_EAST, TileType.SOUTH_EAST],
    [Direction.UP]: [TileType.NORTH_SOUTH, TileType.SOUTH_EAST, TileType.SOUTH_WEST],
    [Direction.LEFT]: [TileType.EAST_WEST, TileType.NORTH_WEST, TileType.SOUTH_WEST],
}