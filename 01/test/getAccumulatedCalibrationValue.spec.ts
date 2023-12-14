import { expect } from "chai";
import { getAccumulatedCalibrationValue } from "../src/getAccumulatedCalibrationValue";
import { loadCalibrationData } from "../src/loadCalibrationData";
import { replaceSpelledOutNumbers } from "../src/replaceSpelledOutNumbers";

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
    it("returns accumulated calibration value for second example", () => {
        const data = loadCalibrationData("01/data/example-2");
        const processed = data.map(replaceSpelledOutNumbers)
        console.log(processed)
        const actual = getAccumulatedCalibrationValue(processed);
        expect(actual).to.equal(281);
    })
})