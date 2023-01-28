"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPointInField = exports.angleBetweenHexagons = exports.hexDistance = void 0;
var cartesian_1 = require("./cartesian");
var conversions_1 = require("./conversions");
function hexDistance(h1, h2) {
    var h1_s = (h1.q + h1.r) * -1;
    var h2_s = (h2.q + h2.r) * -1;
    return (Math.abs(h1.q - h2.q) + Math.abs(h1.r - h2.r) + Math.abs(h1_s - h2_s)) / 2;
}
exports.hexDistance = hexDistance;
function angleBetweenHexagons(h1, h2) {
    return (0, cartesian_1.angleBetweenPoints)((0, conversions_1.hexToCartesian)(h1, 3), (0, conversions_1.hexToCartesian)(h2, 3));
}
exports.angleBetweenHexagons = angleBetweenHexagons;
function isPointInField(_a, field, extra) {
    var x = _a.x, y = _a.y;
    if (extra === void 0) { extra = 0; }
    return (x > field.topLeft.x - extra &&
        x < field.bottomRight.x + extra &&
        y > field.topLeft.y - extra &&
        y < field.bottomRight.y + extra);
}
exports.isPointInField = isPointInField;
