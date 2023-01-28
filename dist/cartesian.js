"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anotherPoint = exports.angleBetweenPoints = exports.distance = exports.areSamePoints = exports.createPoint = void 0;
function createPoint(x, y) {
    return { x: x, y: y };
}
exports.createPoint = createPoint;
function areSamePoints(p1, p2) {
    return (p1.x === p2.x && p1.y === p2.y);
}
exports.areSamePoints = areSamePoints;
function distance(p1, p2) {
    var x = p1.x - p2.x;
    var y = p1.y - p2.y;
    return Math.sqrt(x * x + y * y);
}
exports.distance = distance;
function angleBetweenPoints(p1, p2) {
    return (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI + 450) % 360;
}
exports.angleBetweenPoints = angleBetweenPoints;
function anotherPoint(x, y, a, dist) {
    return {
        x: x - Math.sin(-a * (Math.PI / 180)) * dist,
        y: y - Math.cos(-a * (Math.PI / 180)) * dist,
    };
}
exports.anotherPoint = anotherPoint;
