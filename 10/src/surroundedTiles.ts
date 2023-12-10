import { isEclosed } from "./isEnclosed";
import { loadAreaMap } from "./loadAreaMap";
import { AreaMap, TileType } from "./types";
import { isPositionSame, status } from "./utils";
import { getPath } from "./walkingRange";

export const surroundedTiles = (mapFileName: string): number => {
    const map = simplifyAreaMap(loadAreaMap(mapFileName));
    let counter = 0;
    map.forEach((row, y) => row.forEach((_, x) => {
        if (isEclosed(map, { x, y }) ? 1 : 0) {
            counter++;
        }
    }))
    return counter
};

const simplifyAreaMap = (areaMap: AreaMap): AreaMap => {
    const paths = getPath(areaMap);
    return areaMap.map((row, y) => row.map((_, x) => {
        const isPartOfLoop = paths.some((pathPosition) => isPositionSame(pathPosition, { x, y }));
        return isPartOfLoop ? status(areaMap, {x,y}) : TileType.GROUND;
    }));
};
