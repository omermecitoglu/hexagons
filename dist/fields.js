"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createField = void 0;
var cartesian_1 = require("./cartesian");
function createField(sX, sY, eX, eY, extra) {
    if (extra === void 0) { extra = 0; }
    return {
        topLeft: (0, cartesian_1.createPoint)(sX - extra, sY - extra),
        bottomRight: (0, cartesian_1.createPoint)(eX + extra, eY + extra),
    };
}
exports.createField = createField;
