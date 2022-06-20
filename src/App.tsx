import Spline, { SplineEvent } from "@splinetool/react-spline";
import React, { useEffect } from "react";

export default function App() {
  const [equation, setEquation] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  function onMouseDown(e: SplineEvent): void {
    console.log(e.target.name);
    if (e.target.name === "Key1") {
      setEquation((prev) => prev + "1");
    } else if (e.target.name === "Key2") {
      setEquation((prev) => prev + "2");
    } else if (
      e.target.name === "Key+" &&
      equation[equation.length - 1] !== "+"
    ) {
      setEquation((prev) => prev + "+");
    } else if (
      e.target.name === "Key=" &&
      equation[equation.length - 1] !== "+" &&
      equation.length > 1
    ) {
      // eslint-disable-next-line no-eval
      alert(equation + "=" + eval(equation));
      setEquation("");
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>): void {
    const key = e.key;
    if (key === "1") {
      setEquation((prev) => prev + "1");
    } else if (key === "2") {
      setEquation((prev) => prev + "2");
    } else if (key === "+" && equation[equation.length - 1] !== "+") {
      setEquation((prev) => prev + "+");
    } else if (
      key === "=" &&
      equation[equation.length - 1] !== "+" &&
      equation.length > 1
    ) {
      // eslint-disable-next-line no-eval
      alert(equation + "=" + eval(equation));
      setEquation("");
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        onKeyDown={onKeyDown}
        onBlur={() => inputRef.current?.focus()}
      />
      <Spline
        scene="https://prod.spline.design/udsQsQSaD-BQCTLH/scene.splinecode"
        onMouseDown={onMouseDown}
      />
    </>
  );
}
