const getColumn = (pattern: string[], index: number) => pattern.map((row) => row[index]).join("")

export const findVerticalMirror = (pattern: string[]): number | undefined => {
    for (let i = 0; i < pattern[0].length; i++) {
        const column = getColumn(pattern, i)
        const nextColumn = getColumn(pattern, i + 1)
        if (column === nextColumn) {
            return i
        }
    }
}