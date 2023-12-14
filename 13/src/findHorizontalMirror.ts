export const findHorizontalMirror = (pattern: string[]): number | undefined => {
    for (let i = 0; i < pattern.length; i++) {
        const row = pattern[i]
        const nextRow = pattern[i + 1]
        if (row === nextRow) {
            return i
        }
    }
}