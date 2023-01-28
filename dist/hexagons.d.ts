import { Point } from "./cartesian";
import { Field } from "./fields";
export type HexaPoint = {
    q: number;
    r: number;
};
export declare function angleBetweenHexagons(h1: HexaPoint, h2: HexaPoint): number;
export declare function isPointInField({ x, y }: Point, field: Field, extra?: number): boolean;
