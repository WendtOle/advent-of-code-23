import { loopCrossings } from "./loopCrossings";
import { AreaMap, Direction, Position, TileType } from "./types"
import { status } from "./utils";

const uneven = (n: number): boolean => n % 2 === 1;

export const isEclosed = (map: AreaMap, position: Position): boolean => {
    if (status(map, position) !== TileType.GROUND) {
        return false;
    }

    const up = loopCrossings(map, position, Direction.UP);
    const down = loopCrossings(map, position, Direction.DOWN);
    const left = loopCrossings(map, position, Direction.LEFT);
    const right = loopCrossings(map, position, Direction.RIGHT);

    const isEnclosedOutput = uneven(up) && uneven(down) && uneven(left) && uneven(right);
    return isEnclosedOutput
}