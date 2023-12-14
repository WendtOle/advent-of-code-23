const isNumber = (input: string): boolean => {
    return !isNaN(Number(input))
}

const isPartOfNumber = (input: string): boolean => {
    const spelledOutNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    return spelledOutNumbers.includes(input)
}

interface Accumulator {
    numberParts: string;
    foundNumber: number | undefined;
} 

export const getAccumulatedCalibrationValue = (input: string[]): number => {
    return input.reduce((acc, line): number => {
        const firstNumber = line.split("").reduce((acc, char) => {
            if (acc.foundNumber !== undefined) {
                return acc
            }   
            if (isNumber(char)) {
                return {...acc, foundNumber: Number(char)}
            }
            const numberParts = acc.numberParts + char
            if (isPartOfNumber(numberParts)) {
                return {...acc, numberParts}
            }
            return {...acc, numberParts: ""}
        }, {numberParts: ""} as Accumulator)

        const lastNumber = line.split("").reverse().reduce((acc, char) => {
            if (acc.foundNumber !== undefined) {
                return acc
            }   
            if (isNumber(char)) {
                return {...acc, foundNumber: Number(char)}
            }
            const numberParts = acc.numberParts + char
            if (isPartOfNumber(String(numberParts.split("").reverse()))) {
                return {...acc, numberParts}
            }
            return {...acc, numberParts: ""}
        }, {numberParts: ""} as Accumulator)

        const {start, end} = line.split("").reduce((acc, char): Accumulator => {
            if (!isNumber(char)) {
                return acc
            }
            return {end: char, start: (acc.start === undefined ? char : acc.start)}
            

        }, {} as Accumulator)
        if (start === undefined || end === undefined) {
            throw Error("Invalid input")
        }
        console.log(start, end)
        return acc + Number(start + end)
    }, 0)
}
