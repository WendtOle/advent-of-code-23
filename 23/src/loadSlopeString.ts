import { readFileSync } from "fs";
import { Slope } from "./types";

export const loadSlopeString = (fileName: string): Slope => {
    const data = readFileSync(fileName)
    const stringData = data.toString()
    const splitted = stringData.split("\n")
    return {
        slopeString: stringData.split("\n").join(""),
        width: splitted[0].length,
        height: splitted.length,
    }
}