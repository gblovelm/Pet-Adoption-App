import React from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(
  // overwrites "not rendered" in the original HTML
  <App />, // this stamps the app
  document.getElementById("root") // where to render it - see above
);
