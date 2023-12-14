import { expect } from "chai";
import { loadPatterns } from "../src/loadPatterns";

describe("task", () => {
    it("should summarize example puzzle corrects", () => {
        expect(loadPatterns("./13/data/example-01")).to.equal(405);
    });
})