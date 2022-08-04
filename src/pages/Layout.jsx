import { Routes, Route } from "@solidjs/router";

import Home from "./Home";
import About from "./About";

export default function Layout() {
  return (
    <>
      {/* <h1>My Site with Lots of Pages</h1> */}
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/other"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </>
  );
}
