import { createRoute } from "../src/createRoute";
import { loadSlopeString } from "../src/loadSlopeString";

describe("createRoute", () => {
    it("should return correct route", () => {
        const slope = loadSlopeString("23/data/example");
        const result = createRoute(slope);
        console.log(result)
    })
});