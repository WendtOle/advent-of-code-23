import { expect } from "chai";
import { surroundedTiles } from "../src/surroundedTiles";

describe("surrounded tiles", () => {
    it("should handle sixth example", () => {
        expect(surroundedTiles("10/data/example-6")).to.equal(4);
    })
    it("should handle seventh example", () => {
        expect(surroundedTiles("10/data/example-7")).to.equal(4);
    })
    it("should handle eights example", () => {
        expect(surroundedTiles("10/data/example-8")).to.equal(8);
    })
    it("should handle ninths example", () => {
        expect(surroundedTiles("10/data/example-9")).to.equal(10);
    })
    it("should handle actual puzzle", () => {
        expect(surroundedTiles("10/data/example-5")).to.equal(367);
    })
});