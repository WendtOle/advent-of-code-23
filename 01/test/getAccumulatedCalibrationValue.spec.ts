import { expect } from "chai";
import { getAccumulatedCalibrationValue } from "../src/getAccumulatedCalibrationValue";
import { loadCalibrationData } from "../src/loadCalibrationData";

describe("getAccumulatedCalibrationValue", () => {
    it("returns accumulated calibration value for first example", () => {
        const data = loadCalibrationData("01/data/example-1");
        const actual = getAccumulatedCalibrationValue(data);
        expect(actual).to.equal(142);
    });
    it("returns accumulated calibration value for actual puzzle", () => {
        const data = loadCalibrationData("01/data/puzzle");
        const actual = getAccumulatedCalibrationValue(data);
        expect(actual).to.equal(54630);
    });
})