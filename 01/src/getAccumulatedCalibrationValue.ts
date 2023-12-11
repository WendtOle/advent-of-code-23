const isNumber = (input: string): boolean => {
    return !isNaN(Number(input))
}

interface Accumulator {
    start: string | undefined;
    end: string | undefined;
} 

export const getAccumulatedCalibrationValue = (input: string[]): number => {
    return input.reduce((acc, line): number => {
        const {start, end} = line.split("").reduce((acc, char): Accumulator => {
            if (!isNumber(char)) {
                return acc
            }
            return {end: char, start: (acc.start === undefined ? char : acc.start)}
            

        }, {} as Accumulator)
        if (start === undefined || end === undefined) {
            throw Error("Invalid input")
        }
        return acc + Number(start + end)
    }, 0)
}
