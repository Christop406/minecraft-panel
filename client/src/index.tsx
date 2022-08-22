import './style/main.css';

import { render } from "solid-js/web";
import { TestComponent } from "./test";

render(() => <TestComponent />, document.getElementById("app"));
