import { expect } from "chai";
import { walkingRange } from "../src/walkingRange";

describe("walking range", () => {
    it("should handle first example", () => {
        expect(walkingRange("data/example-1")).to.equal(4);
    }
    ),
    it("should handle second example", () => {
        expect(walkingRange("data/example-2")).to.equal(4);
    }
    ),
    it("should handle third example", () => {
        expect(walkingRange("data/example-3")).to.equal(8);
    }
    ),
    it("should handle fourth example", () => {
        expect(walkingRange("data/example-4")).to.equal(8);
    }
    )
    it("should handle fifth example", () => {
        expect(walkingRange("data/example-5")).to.equal(6897);
    }
    )
})