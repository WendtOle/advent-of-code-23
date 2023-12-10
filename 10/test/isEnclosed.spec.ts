import { expect } from "chai";
import { isEclosed } from "../src/isEnclosed";
import { TileType } from "../src/types";

const circle = [
    [TileType.GROUND, TileType.GROUND, TileType.GROUND, TileType.GROUND],
    [TileType.SOUTH_EAST, TileType.EAST_WEST, TileType.SOUTH_WEST, TileType.GROUND],
    [TileType.NORTH_SOUTH, TileType.GROUND, TileType.NORTH_SOUTH, TileType.GROUND],
    [TileType.NORTH_EAST, TileType.EAST_WEST, TileType.NORTH_WEST, TileType.GROUND]]

describe("isEnclosed", () => {
    it("should return true if the tile is enclosed", () => {
        expect(isEclosed(circle, {x: 1, y: 2})).to.equal(true);
    })
    it("should return false if the tile is not enclosed", () => {
        expect(isEclosed(circle, {x: 0, y: 0})).to.equal(false);
    })
})