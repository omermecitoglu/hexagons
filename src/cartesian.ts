export type Point = {
  x: number,
  y: number,
};

export function createPoint(x: number, y: number): Point {
  return { x, y };
}

export function areSamePoints(p1: Point, p2: Point) {
  return (p1.x === p2.x && p1.y === p2.y);
}

export function distance(p1: Point, p2: Point) {
  const x = p1.x - p2.x;
  const y = p1.y - p2.y;
  return Math.sqrt(x * x + y * y);
}

export function angleBetweenPoints(p1: Point, p2: Point) {
  return (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI + 450) % 360;
}

export function anotherPoint(x: number, y: number, a: number, dist: number): Point {
  return {
    x: x - Math.sin(-a * (Math.PI / 180)) * dist,
    y: y - Math.cos(-a * (Math.PI / 180)) * dist,
  };
}
