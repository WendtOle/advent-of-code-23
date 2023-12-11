export enum SpaceType {
    EMPTY = "empty",
    GALAXY = "galaxy"
}

export type Image = SpaceType[][]

export const spaceTypeMap: Record<string, SpaceType> = {
    ".": SpaceType.EMPTY,
    "#": SpaceType.GALAXY
}

export interface Position {
    x: number;
    y: number;
}

export const notUndefined = <T>(input: T | undefined): input is T => input !== undefined
