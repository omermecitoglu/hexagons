import { Point } from "./cartesian";
export type Field = {
    topLeft: Point;
    bottomRight: Point;
};
export declare function createField(sX: number, sY: number, eX: number, eY: number, extra?: number): Field;
