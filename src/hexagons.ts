import { Point, angleBetweenPoints } from "./cartesian";
import { hexToCartesian } from "./conversions";
import { Field } from "./fields";

export type HexaPoint = {
  q: number,
  r: number,
};

export function hexDistance(h1: HexaPoint, h2: HexaPoint) {
  const h1_s = (h1.q + h1.r) * -1;
  const h2_s = (h2.q + h2.r) * -1;
  return (Math.abs(h1.q - h2.q) + Math.abs(h1.r - h2.r) + Math.abs(h1_s - h2_s)) / 2;
}

export function angleBetweenHexagons(h1: HexaPoint, h2: HexaPoint) {
  return angleBetweenPoints(hexToCartesian(h1, 3), hexToCartesian(h2, 3));
}

export function isPointInField({ x, y }: Point, field: Field, extra = 0) {
  return (
    x > field.topLeft.x - extra &&
    x < field.bottomRight.x + extra &&
    y > field.topLeft.y - extra &&
    y < field.bottomRight.y + extra
  );
}
