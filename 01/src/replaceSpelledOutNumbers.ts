export const replaceSpelledOutNumbers = (input: string): string => {
    const spelledOutNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    return spelledOutNumbers.reduce((acc, spelledOutNumber, index): string => acc.replace(spelledOutNumber, String(index + 1)), input)
}