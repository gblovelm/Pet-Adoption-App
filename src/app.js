import React, { useState } from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(
  // overwrites "not rendered" in the original HTML
  <App />, // this stamps the app
  document.getElementById("root") // where to render it - see above
);
