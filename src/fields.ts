import { Point, createPoint } from "./cartesian";

export type Field = {
  topLeft: Point,
  bottomRight: Point,
};

export function createField(sX: number, sY: number, eX: number, eY: number, extra = 0): Field {
  return {
    topLeft: createPoint(sX - extra, sY - extra),
    bottomRight: createPoint(eX + extra, eY + extra),
  };
}

export function isPointInField({ x, y }: Point, field: Field, extra = 0) {
  return (
    x > field.topLeft.x - extra &&
    x < field.bottomRight.x + extra &&
    y > field.topLeft.y - extra &&
    y < field.bottomRight.y + extra
  );
}
