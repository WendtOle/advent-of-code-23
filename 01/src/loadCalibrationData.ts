import { readFileSync } from "fs"

export const loadCalibrationData = (fileName: string) => {
    const data = readFileSync(fileName)
    const stringData = data.toString()
    return stringData.split("\n")
}