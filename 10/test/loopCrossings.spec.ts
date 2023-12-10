import { expect } from "chai";
import { loopCrossings } from "../src/loopCrossings";
import { Direction, TileType } from "../src/types";

const circle = [
    [TileType.GROUND, TileType.GROUND, TileType.GROUND, TileType.GROUND],
    [TileType.SOUTH_EAST, TileType.EAST_WEST, TileType.SOUTH_WEST, TileType.GROUND],
    [TileType.NORTH_SOUTH, TileType.GROUND, TileType.NORTH_SOUTH, TileType.GROUND],
    [TileType.NORTH_EAST, TileType.EAST_WEST, TileType.NORTH_WEST, TileType.GROUND]]

const convex = [
    [TileType.SOUTH_EAST, TileType.EAST_WEST, TileType.EAST_WEST, TileType.SOUTH_WEST],
    [TileType.NORTH_SOUTH, TileType.GROUND, TileType.GROUND, TileType.NORTH_SOUTH],
    [TileType.NORTH_SOUTH, TileType.GROUND, TileType.SOUTH_EAST, TileType.NORTH_WEST],
    [TileType.NORTH_EAST, TileType.EAST_WEST, TileType.NORTH_WEST, TileType.GROUND]]

const circleWithFold = [
    [TileType.SOUTH_EAST, TileType.EAST_WEST, TileType.SOUTH_WEST],
    [TileType.NORTH_EAST, TileType.EAST_WEST, TileType.NORTH_WEST],
    [TileType.GROUND, TileType.GROUND, TileType.GROUND],
]

describe("loopCrossings()", () => {
    it("should return 0 if there is no part of loop in the given direction", () => {
        expect(loopCrossings(circle, {x: 1, y: 0}, Direction.RIGHT)).to.equal(0);
    })
    it("should return 1 if there is one part of loop in the given direction", () => {
        expect(loopCrossings(circle, {x: 1, y: 2}, Direction.UP)).to.equal(1);
    })
    it("should return 2 if there are two parts of loop in the given direction", () => {
        expect(loopCrossings(circle, {x: 1, y: 0}, Direction.DOWN)).to.equal(2);
    })
    it("should return 0 if there are three parts adjacent parts of the loop in the given direction", () => {
        expect(loopCrossings(circle, {x: 0, y: 0}, Direction.DOWN)).to.equal(0);
    })
    it("should return 2 if there are two parts but the parts belong to different parts of the loop", () => {
        expect(loopCrossings(circleWithFold, {x: 1, y: 2}, Direction.UP)).to.equal(2);
    })
    it("should handle inside point behind convex corner", () => {
        expect(loopCrossings(convex, {x: 1, y: 2}, Direction.DOWN)).to.equal(1);
    })
})