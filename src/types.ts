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