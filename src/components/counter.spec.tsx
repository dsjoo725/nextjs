import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, test, beforeEach, afterEach, expect } from "vitest";
import Counter from "./counter";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  afterEach(() => {
    cleanup();
  });

  test("초기에 카운터가 0으로 표시되는가?", () => {
    expect(screen.getByText("카운터: 0")).toBeTruthy();
  });

  test("+1 버튼 클릭 시 카운터가 1이 되는가?", () => {
    const incrementButton = screen.getByRole("button", { name: "+1" });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText("카운터: 2")).toBeTruthy();
  });

  test("-1 버튼 클릭 시 카운터가 -1이 되는가?", () => {
    const decrementButton = screen.getByRole("button", { name: "-1" });
    fireEvent.click(decrementButton);
    expect(screen.getByText("카운터: -1")).toBeTruthy();
  });

  test("reset 버튼 클릭 시 카운터가 0으로 초기화되는가?", () => {
    const incrementButton = screen.getByRole("button", { name: "+1" });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(screen.getByText("카운터: 2")).toBeTruthy();

    const resetButton = screen.getByRole("button", { name: "reset" });
    fireEvent.click(resetButton);

    expect(screen.getByText("카운터: 0")).toBeTruthy();
  });
});
