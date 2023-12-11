import { Image, Position, SpaceType, notUndefined } from "./types";

export const getGalaxyPositions = (image: Image): Position[] => 
    image
        .flatMap((row, y) => row.map((spaceType, x) => spaceType === SpaceType.GALAXY ? ({ x, y }) : undefined))
        .filter(notUndefined)