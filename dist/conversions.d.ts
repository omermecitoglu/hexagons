import { Point } from "./cartesian";
import { HexaPoint } from "./hexagons";
export declare function hexToCartesian({ q, r }: HexaPoint, hexRadius: number): Point;
export declare function cartesianToHex({ x, y }: Point, hexRadius: number): HexaPoint;
