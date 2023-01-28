export type Point = {
    x: number;
    y: number;
};
export declare function createPoint(x: number, y: number): Point;
export declare function areSamePoints(p1: Point, p2: Point): boolean;
export declare function distance(p1: Point, p2: Point): number;
export declare function angleBetweenPoints(p1: Point, p2: Point): number;
export declare function anotherPoint(x: number, y: number, a: number, dist: number): Point;
