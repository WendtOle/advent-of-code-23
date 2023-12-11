import { getDistance } from "./getDistance";
import { getExpanded } from "./getExpanded";
import { getGalaxyPositions } from "./getGalaxyPositions";
import { Image } from "./types";

export const getAccumulatedDistance = (image: Image): number => {
    const expanded = getExpanded(image)
    const galaxyPositions = getGalaxyPositions(expanded)
    let distance = 0 
    let counter = 0
    for(let i = 0; i < galaxyPositions.length; i++) {
        for(let j = 0; j < i; j++) {
            counter ++
            const currentDistance = getDistance(galaxyPositions[i], galaxyPositions[j])
            distance += currentDistance
        }
    }
    return distance
}