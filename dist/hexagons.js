"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexNeighbors = exports.angleBetweenHexagons = exports.hexDistance = exports.areSameHexagons = exports.createHexaPoint = void 0;
var cartesian_1 = require("./cartesian");
var conversions_1 = require("./conversions");
function createHexaPoint(q, r) {
    return { q: q, r: r };
}
exports.createHexaPoint = createHexaPoint;
function areSameHexagons(h1, h2) {
    return (h1.q === h2.q && h1.r === h2.r);
}
exports.areSameHexagons = areSameHexagons;
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
function hexNeighbors(_a) {
    var q = _a.q, r = _a.r;
    return [
        createHexaPoint(q + 1, r - 1),
        createHexaPoint(q + 1, r),
        createHexaPoint(q, r + 1),
        createHexaPoint(q - 1, r + 1),
        createHexaPoint(q - 1, r),
        createHexaPoint(q, r - 1),
    ];
}
exports.hexNeighbors = hexNeighbors;
