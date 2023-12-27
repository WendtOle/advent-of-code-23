import { getCoords } from "./getCoords";
import { getNeightbourField } from "./getNeightborField";
import { Slope, directionMap, slopeDirection } from "./types";

export const createRoute = (slope: Slope) => {
    console.log({slope})
    const {slopeString} = slope;
    const output = slopeString.split("").map((char, index) => {
        if (char === "#") {
            return undefined;
        }
        const coords = getCoords(slope, index);
        if (char === ".") {
            const output =  Object.values(directionMap).map(direction => 
                getNeightbourField(slope, coords, direction)
            ).filter(field => field !== undefined) as Array<{x: number, y: number}>
            return output
        }
        if (Object.keys(slopeDirection).includes(char)) {
            const direction = slopeDirection[char]
            const output = getNeightbourField(slope, coords, directionMap[direction])
            if (output === undefined) {
                throw new Error("Invalid slope - slope should not result in undefined field")
            }
            return [output]
        }
        console.log(index, `-${char}-`)
        throw new Error("Invalid slope - slope should not contain invalid characters")
    })
    const something = output.map((fields, index): [number, number[]] | undefined => {
        if (fields === undefined) {
            return undefined;
        }
        return [index, fields.map(field => field.x + field.y * slope.width)]
    }).reduce((acc, curr) => {
        if (curr === undefined) {
            return acc;
        }
        return {...acc, [curr[0] as number]: curr[1]}
    }, {} as Record<number, number[]>)
    return something;
}