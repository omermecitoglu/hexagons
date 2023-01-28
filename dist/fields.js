"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPointInField = exports.createField = void 0;
var cartesian_1 = require("./cartesian");
function createField(sX, sY, eX, eY, extra) {
    if (extra === void 0) { extra = 0; }
    return {
        topLeft: (0, cartesian_1.createPoint)(sX - extra, sY - extra),
        bottomRight: (0, cartesian_1.createPoint)(eX + extra, eY + extra),
    };
}
exports.createField = createField;
function isPointInField(_a, field, extra) {
    var x = _a.x, y = _a.y;
    if (extra === void 0) { extra = 0; }
    return (x > field.topLeft.x - extra &&
        x < field.bottomRight.x + extra &&
        y > field.topLeft.y - extra &&
        y < field.bottomRight.y + extra);
}
exports.isPointInField = isPointInField;
