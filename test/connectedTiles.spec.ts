import { expect } from "chai";
import { TileType } from "../src/types";
import { connectedTiles } from "../src/connectedTiles";

describe("connected tiles", () => {
    it("throws on ground", () => {
        expect(() => connectedTiles([[TileType.GROUND]], {x: 0, y: 0})).to.throw("You on the ground, something went wrong");
    }),
    it("can handle connected tile", () => {
        expect(connectedTiles([[TileType.START, TileType.EAST_WEST]], {x: 0, y: 0})).to.deep.equal([{x: 1, y: 0}]);
    })
    it("can handle multiple horizontally connected tiles", () => {
        expect(connectedTiles([[TileType.NORTH_EAST, TileType.START, TileType.EAST_WEST]], {x: 1, y: 0})).to.deep.equals([{x: 0, y: 0}, {x: 2, y: 0}]);
    })
    it("can handle multiple vertically connected tiles", () => {
        expect(connectedTiles([[TileType.NORTH_SOUTH], [TileType.START], [TileType.NORTH_WEST]], {x: 0, y: 1})).to.deep.equals([{x: 0, y: 2}, {x: 0, y: 0}]);
    })
    it("pays attention if the current tile is able to connect to the next tile", () => {
        expect(connectedTiles([[TileType.NORTH_SOUTH, TileType.EAST_WEST]], {x: 0, y: 0})).to.deep.equals([]);
    })
})