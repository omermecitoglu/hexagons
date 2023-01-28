"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPointInField = exports.angleBetweenHexagons = void 0;
var cartesian_1 = require("./cartesian");
var conversions_1 = require("./conversions");
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
