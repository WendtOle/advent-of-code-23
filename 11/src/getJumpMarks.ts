import { Image, JumpMarks, SpaceType } from "./types";

export const getJumpMarks = (image: Image): JumpMarks => {
    const verticalJumpMarks = image.reduce((acc, row, index) => {
        const isEmptryRow = row.every((space) => space === SpaceType.EMPTY)
        return isEmptryRow ? [...acc, index] : acc
    }, [] as number[])

    const horizontalLength = image[0].length
    const horizontalJumpMarks = [...Array(horizontalLength).keys()].reduce((acc, index) => {
        const column = image.map((row) => row[index])
        const isEmptyColumn = column.every((entry) => entry === SpaceType.EMPTY)
        return isEmptyColumn ? [...acc, index] : acc
    }, [] as number[])
    return {
        horizontal: horizontalJumpMarks,
        vertical: verticalJumpMarks
    }
}