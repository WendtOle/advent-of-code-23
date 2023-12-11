import { Image, SpaceType } from "./types";

const appendColumn = (image: Image, column: SpaceType[]): Image => {
    if (image.length !== column.length) {
        throw new Error("Image and column must be the same length")
    }
    return column.reduce((acc, entry, index) => {
        acc[index].push(entry)
        return acc
    }, image)

}

export const getExpanded = (image: Image): Image => {
    const expandedVertically = image.reduce((acc, row) => {
        const isEmptryRow = row.every((space) => space === SpaceType.EMPTY)
        if (isEmptryRow) {
            return [...acc, row, row]
        }
        return [...acc, row]
    }, [] as Image)
    const horizontalLength = expandedVertically[0].length
    const emptyVerticallyStretchedImage: Image = [...Array(expandedVertically.length).keys()].reduce((acc) => {
        return [...acc, []]
    }, [] as Image)
    const expandedHorizontally = [...Array(horizontalLength).keys()].reduce((acc, index) => {
        const column = expandedVertically.map((row) => row[index])
        const isEmptyColumn = column.every((entry) => entry === SpaceType.EMPTY)
        if (isEmptyColumn) {
            return appendColumn(appendColumn(acc, column), column)
        }
        return appendColumn(acc, column)
    }, emptyVerticallyStretchedImage)
    return expandedHorizontally
}