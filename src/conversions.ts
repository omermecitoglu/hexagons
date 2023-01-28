import { Point } from "./cartesian";
import { HexaPoint } from "./hexagons";

export function hexToCartesian({ q, r }: HexaPoint, hexRadius: number): Point {
  return {
    x: hexRadius * (Math.sqrt(3) * q + Math.sqrt(3) / 2 * r),
    y: hexRadius * (3 / 2 * r),
  };
}

export function cartesianToHex({ x, y }: Point, hexRadius: number): HexaPoint {
  return {
    q: Math.round((x * Math.sqrt(3) / 3 - y / 3) / hexRadius),
    r: Math.round(y * 2 / 3 / hexRadius),
  };
}
