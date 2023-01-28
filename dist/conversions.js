"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesianToHex = exports.hexToCartesian = void 0;
function hexToCartesian(_a, hexRadius) {
    var q = _a.q, r = _a.r;
    return {
        x: hexRadius * (Math.sqrt(3) * q + Math.sqrt(3) / 2 * r),
        y: hexRadius * (3 / 2 * r),
    };
}
exports.hexToCartesian = hexToCartesian;
function cartesianToHex(_a, hexRadius) {
    var x = _a.x, y = _a.y;
    return {
        q: Math.round((x * Math.sqrt(3) / 3 - y / 3) / hexRadius),
        r: Math.round(y * 2 / 3 / hexRadius),
    };
}
exports.cartesianToHex = cartesianToHex;
