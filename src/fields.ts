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
