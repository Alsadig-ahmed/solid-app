/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./index.css";
import Layout from "./pages/Layout";

render(
  () => (
    <Router>
      <Layout />
    </Router>
  ),
  document.getElementById("root")
);
