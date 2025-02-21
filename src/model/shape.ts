export type Shape = Rect | Line | Ellipse;

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Line {
  x: number;
  y: number;
  /**
   * [x1, y1, x2, y2] - 시작점(x1, y1)과 끝점(x2, y2)을 나타내는 좌표 배열
   */
  points: [number, number, number, number];
}

export interface Ellipse {
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
}
