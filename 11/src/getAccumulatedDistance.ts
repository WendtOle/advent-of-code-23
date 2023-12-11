import { getDistance } from "./getDistance";
import { getGalaxyPositions } from "./getGalaxyPositions";
import { getJumpMarks } from "./getJumpMarks";
import { DistanceWithJumps, Image } from "./types";

export const getAccumulatedDistance = (image: Image): DistanceWithJumps => {
    const galaxyPositions = getGalaxyPositions(image)
    const jumpMarks = getJumpMarks(image)
    let distance: DistanceWithJumps = {jumps: 0, steps: 0} 
    for(let i = 0; i < galaxyPositions.length; i++) {
        for(let j = 0; j < i; j++) {
            const currentDistance = getDistance(galaxyPositions[i], galaxyPositions[j], jumpMarks)
            distance = {jumps: distance.jumps + currentDistance.jumps, steps: distance.steps + currentDistance.steps}
        }
    }
    return distance
}