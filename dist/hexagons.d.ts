export type HexaPoint = {
    q: number;
    r: number;
};
export declare function createHexaPoint(q: number, r: number): HexaPoint;
export declare function areSameHexagons(h1: HexaPoint, h2: HexaPoint): boolean;
export declare function hexDistance(h1: HexaPoint, h2: HexaPoint): number;
export declare function angleBetweenHexagons(h1: HexaPoint, h2: HexaPoint): number;
export declare function hexNeighbors({ q, r }: HexaPoint): HexaPoint[];
