import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// throw new Error("lol");   // useful to use at various places in the code to check its being loaded
// a React Component. Returns result of React.createElement
const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(
  // overwrites "not rendered" in the original HTML
  <App />, // this stamps the app
  document.getElementById("root") // where to render it - see above
);
