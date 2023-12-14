import { findHorizontalMirror } from "./findHorizontalMirror"
import { findVerticalMirror } from "./findVerticalMirror"

export const findMirror = (pattern: string[]): {horizontal?: number, vertical?: number} => {
    const horizontalMirror = findHorizontalMirror(pattern)
    const verticalMirror = findVerticalMirror(pattern)
    return { horizontal: horizontalMirror, vertical: verticalMirror }
}