"use strict";
function sequence(start = 0, step = 1) {
    const checkType = (value, type, message) => {if (typeof value !== type) throw new TypeError(message)};
    checkType(start, "number", "invalid start");
    checkType(step, "number", "invalid step");

    let nextNumber = start;
    return  () => {
        let result = nextNumber;
        nextNumber += step;
        return result;
    };
}