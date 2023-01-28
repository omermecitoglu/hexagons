import { angleBetweenPoints } from "./cartesian";
import { hexToCartesian } from "./conversions";

export type HexaPoint = {
  q: number,
  r: number,
};

export function createHexaPoint(q: number, r: number): HexaPoint {
  return { q, r };
}

export function areSameHexagons(h1: HexaPoint, h2: HexaPoint) {
  return (h1.q === h2.q && h1.r === h2.r);
}

export function hexDistance(h1: HexaPoint, h2: HexaPoint) {
  const h1_s = (h1.q + h1.r) * -1;
  const h2_s = (h2.q + h2.r) * -1;
  return (Math.abs(h1.q - h2.q) + Math.abs(h1.r - h2.r) + Math.abs(h1_s - h2_s)) / 2;
}

export function angleBetweenHexagons(h1: HexaPoint, h2: HexaPoint) {
  return angleBetweenPoints(hexToCartesian(h1, 3), hexToCartesian(h2, 3));
}

export function hexNeighbors({ q, r }: HexaPoint): HexaPoint[] {
  return [
    createHexaPoint(q + 1, r - 1),
    createHexaPoint(q + 1, r),
    createHexaPoint(q, r + 1),
    createHexaPoint(q - 1, r + 1),
    createHexaPoint(q - 1, r),
    createHexaPoint(q, r - 1),
  ];
}
