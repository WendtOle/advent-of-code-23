import { expect } from "chai";
import { loadAreaMap } from "../src/loadAreaMap"
import { TileType } from "../src/types";

describe("load area map", () => {
    it("should handle example-1", () => {
        expect(loadAreaMap("10/data/example-1")).to.deep.equal([
            [TileType.GROUND, TileType.GROUND,TileType.GROUND, TileType.GROUND,TileType.GROUND], 
            [TileType.GROUND, TileType.START,TileType.EAST_WEST, TileType.SOUTH_WEST,TileType.GROUND],
            [TileType.GROUND, TileType.NORTH_SOUTH,TileType.GROUND, TileType.NORTH_SOUTH,TileType.GROUND],
            [TileType.GROUND, TileType.NORTH_EAST,TileType.EAST_WEST, TileType.NORTH_WEST,TileType.GROUND],
            [TileType.GROUND, TileType.GROUND,TileType.GROUND, TileType.GROUND,TileType.GROUND],
        ])
    })})
