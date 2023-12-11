import { Image, SpaceType } from "./types";

export const getGalaxyPositions = (image: Image) => 
    image
        .flatMap((row, y) => row.map((spaceType, x) => spaceType === SpaceType.GALAXY ? ({ x, y }) : undefined))
        .filter((position) => position !== undefined)