import { readFileSync } from "fs";

export const loadPatterns = (fileName: string): string[][] => {
    const data = readFileSync(fileName)
    const patterns = data.toString().split("\n\n").map((pattern) => pattern.split("\n"))
    console.log(patterns)
    return patterns
}
