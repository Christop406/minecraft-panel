import { Route, Routes } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import { Container, Navigation, Panel } from "./components";
import { ConfigPanel } from "./pages";

export const Application: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" component={ConfigPanel}></Route>
        </Routes>
      </Container>
    </>
  );
};
