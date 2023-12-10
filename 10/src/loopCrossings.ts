import { AreaMap, Direction, DirectionType, Position, TileType, allowedDirectionsPerTileType, directionPositions, directionToDirectionTyp, directionTypeToDirection } from "./types";
import { status } from "./utils";

const getAmountOfPoints = (map: AreaMap, direction: Direction, position: Position): number => {
    if (direction === Direction.UP) {
        return position.y 
    }
    if (direction === Direction.DOWN) {
        return map.length - 1 - position.y
    }
    if (direction === Direction.LEFT) {
        return position.x 
    }
    if (direction === Direction.RIGHT) {
        return map[0].length - 1 - position.x
    }
    throw new Error("This should never happen")
}

const pointsToCheck = (map: AreaMap, direction: Direction, position: Position): Position[] => {
    const directionPosition = directionPositions[direction];
    return [...Array(getAmountOfPoints(map, direction, position)).keys()].reduce((prev: Position[]): Position[] => { 
        const last = prev.length > 0 ? prev[prev.length - 1] : position;
        return [...prev, { x: last.x + directionPosition.x, y: last.y + directionPosition.y }]
    }, [] as Position[])
}

const isParallelTile = (directionType: DirectionType, currentStatus: TileType) =>
    directionTypeToDirection[directionType].every((direction) => allowedDirectionsPerTileType[currentStatus].includes(direction))

const getOrthogonalTileDirection = (directionType: DirectionType, currentStatus: Exclude<TileType,TileType.EAST_WEST|TileType.NORTH_SOUTH>) => 
    {
        const direction = allowedDirectionsPerTileType[currentStatus].find(curr => !directionTypeToDirection[directionType].includes(curr));
        if (!direction) {
            throw new Error("This should never happen")
        }
        return direction
    };

const assertStraightTile = (currentStatus: TileType): currentStatus is TileType.EAST_WEST |  TileType.NORTH_SOUTH  => 
    currentStatus === TileType.EAST_WEST || currentStatus === TileType.NORTH_SOUTH;

export const loopCrossings = (map: AreaMap, position: Position, direction: Direction): number => {
    const directionType = directionToDirectionTyp[direction];

    const ray = pointsToCheck(map, direction, position);

    interface Helper {
        crossings: number;
        enteringDirection: Direction | undefined;
    }

    return ray.reduce((prev: Helper, current: Position): Helper => {
        const {crossings, enteringDirection} = prev;
        const currentStatus = status(map, current);
        if (currentStatus === TileType.GROUND) {
            return prev;
        }

        if (assertStraightTile(currentStatus)) {
            return {
                ...prev, 
                crossings: isParallelTile(directionType, currentStatus) 
                    ? crossings 
                    : crossings + 1
            };
        }

        const enteringOrLeavingDirection = getOrthogonalTileDirection(directionType, currentStatus);

        if (enteringDirection === undefined) {
            return {...prev, enteringDirection: enteringOrLeavingDirection}
        }

        if (enteringDirection === enteringOrLeavingDirection) {
            return {...prev, enteringDirection: undefined}
        }

        if (enteringDirection !== enteringOrLeavingDirection) {
            return {enteringDirection: undefined, crossings: crossings + 1};
        }

        throw new Error("This point should never be reached")
    }, {crossings: 0, enteringDirection: undefined}).crossings

}