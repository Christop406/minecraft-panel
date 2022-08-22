import { Component, createSignal } from "solid-js";

export const TestComponent: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <h1>Test {count()}</h1>
      <span>How long it take?</span>
      <button class="text-lg text-blue-500" onClick={increment}>
        Up!
      </button>
    </>
  );
};
