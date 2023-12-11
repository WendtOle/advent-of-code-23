export enum SpaceType {
    EMPTY = "empty",
    GALAXY = "galaxy"
}

export type Image = SpaceType[][]

export const spaceTypeMap: Record<string, SpaceType> = {
    ".": SpaceType.EMPTY,
    "#": SpaceType.GALAXY
}
