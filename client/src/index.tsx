import "./style/main.css";

import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { Application } from "./Application";

render(
  () => (
    <Router>
      <Application />
    </Router>
  ),
  document.getElementById("app")
);
