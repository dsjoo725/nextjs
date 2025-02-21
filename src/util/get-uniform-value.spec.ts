import { describe, it, expect } from "vitest";

import { Shape } from "@/model/shape";
import { getCommonValue } from "./get-common-value";

describe("getUniformValue ", () => {
  it("빈 배열인 경우, 함수가 null을 반환하는가?", () => {
    const checkX = getCommonValue((s: Shape) => s.x);

    expect(checkX([])).toBeNull();
    expect(getCommonValue((s: Shape) => s.x, [])).toBeNull();
  });

  const shapes: Shape[] = [
    { x: 10, y: 20, width: 100, height: 100 },
    { x: 10, y: 25, points: [0, 0, 100, 100] },
    { x: 10, y: 30, radiusX: 50, radiusY: 50 },
  ];

  it("모든 요소의 값이 동일한 경우, 해당 공통 값을 반환하는가?", () => {
    const checkX = getCommonValue((s: Shape) => s.x);

    expect(checkX(shapes)).toBe(10);
    expect(getCommonValue((s: Shape) => s.x, shapes)).toBe(10);
  });

  it("요소 중 하나라도 다른 값이 있으면, 함수가 null을 반환하는가?", () => {
    const checkY = getCommonValue((s: Shape) => s.y);

    expect(checkY(shapes)).toBeNull();
    expect(getCommonValue((s: Shape) => s.y, shapes)).toBeNull();
  });
});
